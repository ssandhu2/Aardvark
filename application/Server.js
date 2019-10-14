const express = require("express");
const mysql = require("mysql");

const app = express();
const router = express.Router();
var path = __dirname + '/html/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get('/style', function(req, res) {
  res.sendFile(path + 'style.css');
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});
router.get("/aboutAlan",function(req,res){
  res.sendFile(path + "aboutAlan.html");
});
router.get("/alanjpg", function (req, res) {
  res.sendFile(path + "images/alan.jpg");
});
router.get("/aboutDaisy",function(req,res){
  res.sendFile(path + "aboutDaisy.html");
});
router.get("/daisyjpg", function (req, res) {
  res.sendFile(path + "images/Daisy.jpg");
});
router.get("/aboutJonathan",function(req,res){
  res.sendFile(path + "aboutJonathan.html");
});
router.get("/BigJonjpg", function (req, res) {
  res.sendFile(path + "images/BigJon.jpg");
});
router.get("/aboutRussell", function (req, res) {
  res.sendFile(path + "aboutRussell.html");
});
router.get("/russelljpg", function (req, res) {
  res.sendFile(path + "images/russell.jpg");
});
router.get("/aboutIda", function (req, res) {
  res.sendFile(path + "aboutIda.html");
});
router.get("/idajpg", function (req, res) {
  res.sendFile(path + "images/ida.jpg");
});
router.get("/aboutSunminder", function (req, res) {
  res.sendFile(path + "aboutSunminder.html");
});
router.get("/Sunminderjpg", function (req, res) {
  res.sendFile(path + "images/Sunminder.jpg");
});
router.get("/aboutRyan", function (req, res) {
  res.sendFile(path + "aboutRyan.html");
});
router.get("/ryanjpg", function (req, res) {
  res.sendFile(path + "images/r.jpg");
});
router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});


