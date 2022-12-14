const express = require('express');
const mongoose = require('mongoose');
const memeOperations = require('./memeCRUD');
const userOperations = require('./userCRUD');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use('/memes', memeOperations);
app.use('/users', userOperations);

mongoose.connect('mongodb://127.0.0.1:27017/probaIT', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo Connected!");
    })
    .catch((err) => {
        console.log(err);
    });


// app.use("*", (req, res) => {
//     res.status(404).send("Page not found");
// });

app.listen(3001, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", 3001);
})

