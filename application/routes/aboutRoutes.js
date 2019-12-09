let express = require('express');
let about_routes = express.Router();

about_routes.get("/ida", function (req, res) {
    res.render("aboutIda", 
    {page: 'about',
    loggedin: req.user});
});

about_routes.get("/alan", function (req, res) {
    res.render("aboutAlan", 
    {page: 'about',
    loggedin: req.user});
});

about_routes.get("/russell", function (req, res) {
    res.render("aboutRussell", 
    {page: 'about',
    loggedin: req.user});
});

about_routes.get("/ryan", function (req, res) {
    res.render("aboutRyan", 
    {page: 'about',
    loggedin: req.user});
});

about_routes.get("/jonathan", function (req, res) {
    res.render("aboutJonathan", 
    {page: 'about',
    loggedin: req.user});
});

about_routes.get("/daisy", function (req, res) {
    res.render("aboutDaisy", 
    {page: 'about',
    loggedin: req.user});
});

about_routes.get("/sunminder", function (req, res) {
    res.render("aboutSunminder", 
    {page: 'about',
    loggedin: req.user});
});
about_routes.route('/').get((req,res) => {
    res.render('about', 
    {page: 'about',
    loggedin: req.user});
});
module.exports = about_routes;