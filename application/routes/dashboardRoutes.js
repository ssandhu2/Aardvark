const express = require('express');
const dashboardRouter = express.Router();
const db = require('../model/db.js');
const bodyparser = require('body-parser');
const passport = require('passport');
const { loggedIn } = require('../model/validator.js'); // to check if user is logged in

// parser to parse request body form-data
let parser = bodyparser.urlencoded({ extended: false });
dashboardRouter.use(parser);

// get login page
dashboardRouter.get('/', loggedIn, (req, res) => {

    console.log("\n\nD A S H B O A R D\nCurrent logged in user:")
    console.log(req.user);

    res.render('dashboard',
        {
            page: 'dashboard',
            loggedin: req.user
        });
});

//to insert message to the db
dashboardRouter.post("/item/:id/message", loggedIn, parser, (req, res) => {
	console.log("USER ID IS: " + req.user.id+ " ITEM ID " + req.params.id + " meeting location is " + req.body.meetingLoc + " in the MESSSAGE "  + req.body.contentBody);
	let data = {
		user_id: req.user.id,
		item_id: req.params.id,
		meeting_location: req.body.meetingLoc,
		content: req.body.contentBody
};
db.query("INSERT INTO message SET ?", data);
   res.redirect('/');
});




module.exports = dashboardRouter;