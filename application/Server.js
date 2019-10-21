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
app.use('/items', item_routes);

/*
router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});
router.get('/style', function(req, res) {
  res.sendFile(path + 'style.css');
});
*/

app.use("/",function(req,res){
  res.render("index");
});

//trying to route it to search-results.ejs
app.use("/searchResults",function(req,res){
  res.render("search-results");
});

app.use("/template",function(req,res){
  res.render("template.html");
});

app.use("/contact",function(req,res){
  res.render("contact.html");
});

app.use("*",function(req,res){
  res.render("404.html");
  //res.send("Home");
  //res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});