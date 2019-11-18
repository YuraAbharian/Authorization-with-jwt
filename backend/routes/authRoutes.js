const express = require('express');
const Auth = require('../model/auth.js');
const router = new express.Router();  
const authMiddleware = require('../middleware/authMiddleware.js');
// registe user
router.post("/register", async (req, res) => {   
         const user = new Auth(await req.body);
         const token = await user.generateAuthToken();
            try {
                const data = {
                    userInfo: user,
                    token,
                    message: "Profile created!"
                   }
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
       const token = await user.generateAuthToken()
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
    })



module.exports = router