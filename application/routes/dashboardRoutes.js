const express = require ('express');
const dashboardRouter = express.Router();
const db = require('../model/db.js');
const bodyparser = require('body-parser');
const passport = require('passport');
const { loggedIn } = require('../model/validator.js'); // to check if user is logged in

// parser to parse request body form-data
let parser = bodyparser.urlencoded({extended: false});
dashboardRouter.use(parser);

// get login page
dashboardRouter.get('/', loggedIn, (req, res) => {
    res.render('dashboard', {page: 'dashboard'});
});

module.exports = dashboardRouter;