const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const newAuth = new mongoose.Schema({
        email:{
            type: String,
            unique: true, 
            trim: true,               
            required: true,
            lowercase: true,
            validate(value){
                if(!validator.isEmail(value)){ 
                    throw new Error('Email is invalid!')
                }  
            }
        },
        password: {
            type: String,
            trim: true,
            required: true,

        }
});


newAuth.statics.findByCredentials = async (email, password)=>{
    const user = await Auth.findOne({ email });
    if(!user){
        throw new Error('enable to login/email');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        throw new Error('enable to login/password');
    };
    return user;   
};

newAuth.pre('save', async function (next) {
    const user = this
     if(user.isModified('password')){
         user.password = await bcrypt.hash(user.password, 8);
     };
    next();    
});
const Auth = mongoose.model('Auth', newAuth);

module.exports = Auth;