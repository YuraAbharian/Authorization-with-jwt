import mongoose  from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from"jsonwebtoken";

const newAuth = new mongoose.Schema({
        login:{
            type: String,
            unique: true,
            trim: true,
        },
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
        },
        tokens: [{
            token: {
                type: String,
                required: true,
            }
        }]
}); 

// removing password and tokens from res data!
newAuth.methods.toJSON =  function () {

    const user = this;
    const userPrivats = user.toObject();

    delete userPrivats.password;
    delete userPrivats.tokens;

    return userPrivats
} ;


// relationships between schemas
newAuth.virtual('userDT',{
    ref:'userDatas',
    localField:'_id',
    foreignField:'owner'
    }
);

// autocreate new tokens
newAuth.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, 'newAuthSecurityWord', { expiresIn: '7 days' });
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token
}; 
// Schema find credentials
newAuth.statics.findByCredentials = async (email, password)=>{
    const user = await Auth.findOne({ email });
    if(!user){
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
       throw new Error('Unable to login')
    }
    return user;   
};

newAuth.pre('save', async function (next) {
    const user = this;
     if(user.isModified('password')){
         user.password = await bcrypt.hash(user.password, 8);
     }
    next();    
});
const Auth = mongoose.model('Auth', newAuth);

export  default  Auth;