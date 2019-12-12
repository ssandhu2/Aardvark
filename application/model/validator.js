const { check } = require('express-validator');
const passport = require('passport');

// validation for every input field in registration form
module.exports.validateReg = () => [

	// check input field conditions, returns the corresponding message if conditions not met
	check('name', 'Name must be only characters & spaces, and be 2-16 characters long.')
		.exists().matches(/^[a-z ]+$/i).isLength({ min: 2, max: 16 }),
	check('email', 'Invalid email address.')
		.exists().isEmail(),
	check('password', 'Password must only be 6-20 characters long.')
		.exists().isLength({ min: 6, max: 20 }),
	check('password2').custom((value, { req }) => {
		if (value !== req.body.password) {
		throw new Error('Passwords do not match');
		}
		return true;
	}),
	check('phone', 'Invalid phone number.')
		.exists().isMobilePhone(),
	check('terms', 'You must accept the Terms & Conditions')
		.exists().equals('1'),

];

module.exports.loggedIn = (req, res, next) => {
	if ( req.isAuthenticated() ){
		res.locals.login = req.isAuthenticated;
		return next();
	} else {
		res.redirect('/auth/login');
	}
}

