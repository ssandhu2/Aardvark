const express = require("express");
const about_routes = require('./routes/aboutRoutes');
const item_routes = require('./routes/itemRoutes');
const auth_routes = require('./routes/authRoutes');
const dash_routes = require('./routes/dashboardRoutes');
const session = require('express-session');
const passport = require('passport');
require('./config/passport')(passport); // passport config
const { loggedIn } = require('./model/validator.js'); // to check if user is logged in 

//main server variables
const app = express();
const port = 80;
// express session
app.use(
  session({
    secret: 'secret',
    saveUninitialized: false,
    resave: false,
  }),
);

// Passport middleware for auth
app.use(passport.initialize());
app.use(passport.session());

// setup views folder and view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// allows to call static items in pulic folder such as images
app.use(express.static(__dirname + '/public'));

// routes
app.use('/about', about_routes);
app.use('/searchResults', item_routes);
app.use('/auth', auth_routes);
app.use('/dashboard', dash_routes);

app.get('/sell', loggedIn, (req, res) => {
  res.render("post_new",
    {
      page: 'sell',
      loggedin: req.user
    });
});

app.use("/contact", (req, res) => {
  res.render("contact",
    {
      page: 'contact',
      loggedin: req.user
    });
});

app.use("/", function (req, res) {
  res.render("index",
    {
      page: 'home',
      loggedin: req.user
    });
});

app.use("*", function (req, res) {
  res.render("404.html");
});

app.listen(port, function () {
  console.log("Live at Port " + port);
});