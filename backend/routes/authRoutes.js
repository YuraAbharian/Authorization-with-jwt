const express = require('express');
const Auth = require('../model/auth.js');
const userData = require('../model/userDatas');
const router = new express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// add user profile
router.post('/add-profile', authMiddleware, async (req, res)=>{
    const newUser = new userData({
        ...req.body,
        owner: req.user._id
    });
    try{

        await  newUser.save();
        const data = { user: newUser, statusCode: 0 };
        res.status(200).send(data);

    } catch (e) {
        const data = { message: e.message, statusCode: 1 };
        res.status(400).send(data)
    }

});

// get all users profiles
router.get('/all-profiles', authMiddleware, async (req, res)=>{

    try{

        // get user from authMiddleware _id/tokens
       await req.user.populate('userDT').execPopulate();
        const data = { user: req.user.userDT, statusCode: 0 };
       res.status(200).send(data)
    } catch(e){
        const data = { message: e.message, statusCode: 1 };
            res.ststus(404).send(data);
    }
});

// registe user
router.post("/register", async (req, res) => {   
         const user = new Auth(await req.body);
            try {
                const data = {
                    userInfo: user,
                    message: "Profile created!",
                    statusCode: 0
                   };
                 await user.save(); 
                 res.status(201).send(data);
            } catch (e) {
                const data = { message: e.message, statusCode: 1 };
                res.status(400).send(data);
            }
        });

// login
router.post("/login", async (req, res) => {
    const { email, password } = await req.body;

    try{
       const user = await Auth.findByCredentials(email, password);
       const token = await user.generateAuthToken();
       const data = {
        userInfo: user,
        message: "You're logged in!",
        statusCode: 0,
        isAuth: true
       };
       // max age 7 days
  const cookieOptions={ path:'/',maxAge: 60*60*24*7, httpOnly: true  };

    // create cookie
  res.cookie('Authorization',`Bearer ${ token }`, cookieOptions)
            .send(data);

    } catch(e) {
        const data = { message: e.message, statusCode: 1 };
        res.status(400).send(data);
    }

        });

// on page reload auto login if you we're logged
router.get('/me', authMiddleware, (req, res)=>{
    try{
        const data = {user: req.user, statusCode: 0, isAuth: true};
        res.send(data)
    } catch (e){
        const data = { message: e.message, statusCode: 1, isAuth: false };
        res.status(400).send(data)
    }

    });

// logout user
router.get('/logout', authMiddleware, (req, res)=>{
    req.user.tokens = req.user.tokens.filter(token=>  token.token !== req.token );
    req.user.save();
    res.clearCookie("Authorization");
    const data = {message: 'You\'re logged out', isAuth: false};
    res.status(200).send(data)
    });
    
// loggout from all devices    
router.post('/logoutAll', authMiddleware, (req, res)=>{
    req.user.tokens = [];
    req.user.save();
    res.clearCookie("Authorization");
    const data = {message: 'You\'re logged out from all devices ', isAuth: false};
    res.status(200).send(data)
    });


module.exports = router;