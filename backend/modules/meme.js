const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
    description: {
        type: String,
        maxLength: 2500,
        required: true
    }
});

const Meme = mongoose.model('Meme', memeSchema);

module.exports = Meme;