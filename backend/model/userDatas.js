import mongoose from 'mongoose';

const userDatas = new mongoose.Schema({
    bio: String, // A new bio
    dob: Date, // 23rd july 2018
    followers: Array, // ["134wr3","1q2easd2"]
    posts: Array,
    dialogs: Array,
    lastLogin:Date, // 10 min ago
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Auth',
    } 
}
,{timestamps: true});

export default mongoose.model('userDatas', userDatas);
