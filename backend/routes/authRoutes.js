const express = require('express');
const Auth = require('../model/auth.js');
const router = new express.Router();  

router.post("/register", async (req, res) => {   
         const user = new Auth(await req.body);
            try {
                 await user.save(); 
                 res.status(201).send(user);
            } catch (e) {
                res.status(400).send(e);  
            }
        });

router.post("/login", async (req, res) => {
    const { email, password } = await req.body;
    try{
       const user = await Auth.findByCredentials(email, password)
       const data = {
        userInfo: user,
        message: "You're logged in!"
       }
       res.send(data)
    }catch(e){
        res.status(400).send()
    }
        });
module.exports = router