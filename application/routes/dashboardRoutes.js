const express = require('express');
const dashboardRouter = express.Router();
const db = require('../model/db.js');
const bodyparser = require('body-parser');
const passport = require('passport');
const { loggedIn, isLoggedIn } = require('../model/validator.js'); // to check if user is logged in 

// parser to parse request body form-data
let parser = bodyparser.urlencoded({ extended: false });
dashboardRouter.use(parser);

// get login page
dashboardRouter.get('/', loggedIn, (req, res) => {

    console.log("\n\nD A S H B O A R D\nCurrent logged in user:")
    console.log(req.user);
    console.log(`Current user's id: ${req.user.id}`)

    res.render('dashboard',
        {
            page: 'dashboard',
            loggedin: req.user
        });
});

module.exports = dashboardRouter;