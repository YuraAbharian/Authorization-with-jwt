const mongoose = require('mongoose');

const userDatas = new mongoose.Schema({

    text:{
        type: String,
        required: true,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Auth',
    }
});

const data = mongoose.model('userDatas', userDatas);
module.exports = data;