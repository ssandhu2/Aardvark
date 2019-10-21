let express = require('express');
let about_routes = express.Router();

about_routes.get("/ida", function (req, res) {
    res.render("aboutIda.html");
});

about_routes.get("/alan", function (req, res) {
    res.render("aboutAlan.html");
});

about_routes.get("/russell", function (req, res) {
    res.render("aboutRussell.html");
});

about_routes.get("/ryan", function (req, res) {
    res.render("aboutRyan.html");
});

about_routes.get("/jonathan", function (req, res) {
    res.render("aboutJonathan.html");
});

about_routes.get("/daisy", function (req, res) {
    res.render("aboutDaisy.html");
});

about_routes.get("/sunminder", function (req, res) {
    res.render("aboutSunminder.html");
});

about_routes.route('/').get((req,res) => {
    res.render('about.html');
    //res.sendFile(path + "index.html");
});

/*
about_routes.get('/style', function(req, res) {
    res.sendFile(path + 'style.css');
    });

    about_routes.get("/contact",function(req,res){
    res.sendFile(path + "contact.html");
}); */

module.exports = about_routes;