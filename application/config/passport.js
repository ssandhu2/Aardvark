const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const db = require('../model/db.js');
const passport = require('passport');

const passportConfig = (passport) => {

    passport.use(new LocalStrategy( ({usernameField: 'name'})
        ,(name, password, done) => {

            db.query('SELECT * FROM user WHERE name = ?', name, (err, result) => {

                if (err) {

                    console.log(err);
                    return done(null, false, { message: 'Server Error' });

                } else {

                    console.log("Login, db query result: ")
                    console.log(result);
                    
                    if (!result || result == null || result.length !== 1) {
                        return done(null, false, { message: 'Invalid credentials.' });
                    }
                    
                    if (bcrypt.compareSync(password, result[0].password)){
                        console.log("pass");
                        return done(null, result);
                    } else {
                        console.log("not pass");
                        return done(null, false, { message: 'Wong password' });
                    }

                }

            });
        })
      );

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(id, done) {
        done(null, id);
    });
};

module.exports = passportConfig;