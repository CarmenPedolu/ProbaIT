const Meme = require('./modules/Meme');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    const memes = await Meme.find({});
    res.send(memes);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const memeById = await Meme.findOne({_id: id});

    if (memeById === null) {
        res.send("Id Not Found");
        res.status(404);
    }

    res.send(memeById);
});

router.post('/', async (req, res) => {
    const {description} = req.body; 
    console.log(req.body);     
    console.log(description);
    const newMeme = new Meme({description: description});
    await newMeme.save();   
    res.send("Added Meme");
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;
    const memeById = await Meme.findByIdAndUpdate(id, {description: description});

    if (memeById === null) {
        res.send("ID not found!");
        res.status(404);
    } else {
        res.send(memeById);
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    
    const memeById = await Meme.findOneAndDelete({_id: id});

    if (memeById === null) {
        res.send("Meme not found!");
        res.status(404);
    } else {
        res.send(memeById);    
    }
});

module.exports = router;
