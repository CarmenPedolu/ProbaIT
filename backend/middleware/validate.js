const validate = (body) => {
    try {
        const {email,username, password, confirmation_password} = body;

        if (password.length < 8) {
            throw "Password should have at least 8 characters!";
        }

        if (password.length > 32) {
            throw "Password should have at maximum 32 characters!";
        }

        if (username.length < 8) {
            throw "username should have at least 8 characters!";
        }

        if (username.length > 32) {
            throw "username should have at maximum 32 characters!";
        }
        
        const regex = /^.*@stud\.acs\.upb\.ro*$/;
        if (!regex.test(email)) {
            throw "Email shoul end with @stud.acs.upb.ro!"
        }
    } catch (err) {
        return err;
    }
}

module.exports = validate;