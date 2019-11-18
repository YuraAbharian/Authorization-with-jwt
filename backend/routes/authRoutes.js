const express = require('express');
const Auth = require('../model/auth.js');
const router = new express.Router();
const authMiddleware = require('../middleware/authMiddleware');
// registe user
router.post("/register", async (req, res) => {   
         const user = new Auth(await req.body);
         const token = await user.generateAuthToken();
            try {
                const data = {
                    userInfo: user,
                    token,
                    message: "Profile created!"
                   };
                 await user.save(); 
                 res.status(201).send(data);
            } catch (e) {
                res.status(400).send(e);  
            }
        });
// login
router.post("/login", async (req, res) => {
    const { email, password } = await req.body;
    try{
       const user = await Auth.findByCredentials(email, password)
       const token = await user.generateAuthToken();
       const data = {
        userInfo: user,
        token,
        message: "You're logged in!"
       }
       res.send(data)
    } catch(e) {      
        res.status(400).send(e);  
    }
        });
// on page reload auto login if you we're logged
router.get('/me', authMiddleware, (req, res)=>{
        res.send(req.user)
    });
// logout user
router.post('/logout', authMiddleware, (req, res)=>{
    req.user.tokens = req.user.tokens.filter(token=>  token.token !== req.token )
    req.user.save();
    res.status(200).send('You\'re logged out ')
    });
    
// loggout from all devices    
router.post('/logoutAll', authMiddleware, (req, res)=>{
    req.user.tokens = [];
    req.user.save();
    res.status(200).send('You\'re logged out from all devices ')
    });


module.exports = router;