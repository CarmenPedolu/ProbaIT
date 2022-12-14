const Meme = require('./modules/Meme');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        unique:true,
        type: String,
        maxLength: 500,
        required: true
    },
    username: {
        unique:true,
        type: String,
        maxLength: 32,
        minLength: 8,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    // memes: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Meme'
    // }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;