const User = require('./modules/User');
const express = require('express');

const router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validateRegister = require('./middleware/validate');

router.post('/register', async (req, res) => {
    try {
        const err = validateRegister(req.body);
        if (err) {
            throw err;
        }
        const {email, username, password} = req.body;
        const hash = await bcrypt.hash(password, 8);
        const newUser = new User({email, username, password: hash});
        await newUser.save();
        
        res.send(newUser);
    } catch (err) {
        res.send(err);
    }
});

router.post('/login', async (req, res) => {
    const status = 200;
    try {
        const { username, password } = req.body;

        const user = await User.findOne({username: username});
        console.log(user.username);
        if (user && await bcrypt.compare(password, user.password)) {
            console.log("token");
            const token = jwt.sign({user_id: user._id, username: username}, "token_secret", {
                expiresIn: "2h",
              });

            console.log(token);
            res.send(token);
        } else {
            console.log("errrror");
            status = 401;
            throw "Wrong credentials!";
        }
    } catch (err) {
        res.status(status).send(err);
    }
});


module.exports = router;