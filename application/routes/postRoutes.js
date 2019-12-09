const db = require('../model/db.js');
const express = require('express');
const postRouter = express.Router();
const bodyparser = require('body-parser');
const passport = require('passport');
const { loggedIn } = require('../model/validator.js'); // to check if user is logged in 

let parser = bodyparser.urlencoded({ extended: true });
postRouter.use(parser);
// get post page
postRouter.get('/', loggedIn, (req, res) => {


    res.render('post_new',
        {
            page: 'post',
            loggedin: req.user
        });
});

postRouter.get('/edit', loggedIn, (req, res) => {


    res.render('post_edit',
        {
            page: 'post',
            item_name: '<item-name-here>',
            item_price: '<item-price-here>',
            item_category: '<item-category-here>',
            item_description: '<item-description-here>',
            loggedin: req.user
        });
});


//when new post submitted
postRouter.post ("/", loggedIn, parser,  function(req, res){

    // const { item_name, item_price, item_type, item_description, item_photo} = req.body;
    console.log(req.body.item.name)

    //testing
    res.redirect('post')
});

module.exports = postRouter;