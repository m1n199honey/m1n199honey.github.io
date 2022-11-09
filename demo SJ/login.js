const express = require('express');
const router = express.Router();

const credential = {
    email: "hachimetsu@gmail.com",
    password: "admin1234"
}
router.post("/login", (req, res) => {
    if (req.body.email == credential.email && req.body.password == credential.password) {
        req.session.user = req.body.email;
        res.redirect("/dashboard");
        // res.end("Login sucess !")
    }
    else {
        res.end("invalid user !")
    }
});

module.exports = router;