const express = require ('express');
const authRouter = express.Router();
const db = require('../model/db.js');
const bodyparser = require('body-parser');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

// parser to parse request body form-data
let parser = bodyparser.urlencoded({extended: false});

authRouter.use(parser);

authRouter.get('/login', (req, res) => {
    res.render("login", {page: 'login'});
});

authRouter.get('/register', (req, res) => {
    res.render("register", {page: 'register'});
});

authRouter.post('/register', parser, (req, res) => {
	console.log("post to register page!");
	const errors = validationResult(req).array({ onlyFirstError: true });
	
	const {name,email,password,password2,phone} = req.body;
	console.log(name + ' ' + email + ' ' + password + ' ' + password2 + ' ' + phone );

	const hash = bcrypt.hashSync(password, 10);

	let data = {
		name: name,
		password: hash,
		email: email,
		phone: phone,
		role: 'user',
	};

	db.query("INSERT INTO user SET ?", data, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.redirect('/auth/login');
		}
	})

});

module.exports = authRouter;