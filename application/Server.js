const express = require("express");
const about_routes = require('./routes/aboutRoutes');
const item_routes = require('./routes/itemRoutes');

const app = express();
//const router = express.Router();
//var path = __dirname + '/html/';

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// allows to call static items in pulic folder such as images
app.use(express.static(__dirname + '/public'));

//var path = __dirname + '/html/';
app.set('views', __dirname + '/views');

app.use('/about', about_routes);
app.use('/searchResults', item_routes);

app.get('/login', (req, res) => {
  res.render("login", {page: 'login'});
});

app.get('/register', (req, res) => {
  res.render("register", {page: 'register'});
});

app.get('/sell', (req, res) => {
  res.render("post_new", {page: 'sell'});
});

app.use("/contact", (req, res) => {
  res.render("contact", {page: 'contact'});
});

app.use("/",function(req,res){
  res.render("index", {page: 'home'});
});

app.use("*",function(req,res){
  res.render("404.html");
});

app.listen(80,function(){
  console.log("Live at Port 80");
});