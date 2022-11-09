const express = require('express');
const dashboard = express.Router();

dashboard.post("/dashboard", (req, res) => {
    res.end("welcome to dashbord !");
});
module.exports = dashboard;