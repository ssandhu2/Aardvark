const express = require ('express');
const sqlRouter = express.Router();
const https = require('https');
const db = require('../model/db.js');
const bodyparser = require('body-parser');
const init = require('../model/init.js');

let parser = bodyparser.urlencoded({extended: false});
let app = express();
app.use(parser);

sqlRouter.get("/", (req, res) => {
    //TO ADD CODE HERE IF SOMEONE GOES STRAIGHT TO THE URL
    res.render("results",);
});

sqlRouter.post("/", parser, (req,res) => {

    //get request body stuff from index.ejs 
    let searchTerm = req.body.search;
    let type = req.body.type;
    //search logic
    let query = "SELECT * FROM item;";
    if (searchTerm != '' && type != ''){
        query = `SELECT * FROM item WHERE type="${type}" AND ( name LIKE "%${searchTerm}%" );`
    }
    else if (searchTerm != '' && type == ''){
        query = `SELECT * FROM item WHERE name LIKE "%${searchTerm}%";`
    }
    else if (searchTerm == '' && type != ''){
        query = `SELECT * FROM item WHERE type="${type}";`
    }

    //print db query before making the query
    console.log(query);

    //db query to get results
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            req.searchResult = "";
            req.searchTerm = "";
            req.type = "";
        }

        req.searchResult = result;
        req.searchTerm = searchTerm;
        req.type = type;

        console.log(`searchTerm: ${searchTerm}, type: ${type}`);

        //this prints the items fetched from db if any
        console.log(result);

        //these are what passed into results.ejs
        //searchTerm for what was typed into the search bar
        //type for the type selected, null if All Types
        //searchResults is the array of items. 
        res.render("results", {
            searchTerm: req.searchTerm,
            searchResults: req.searchResult,
            type: req.type
        })
    })
})

sqlRouter.route('/tables').get((req, res) => {
    (async () => {
      await init.CreateTables();
      res.send('Created Tables.');
    })();
  });

  sqlRouter.route('/insert').get((req, res) => {
    (async () => {
      await init.InsertDummy();
      res.send('Inserted Data');
    })();
  });

module.exports = sqlRouter;
