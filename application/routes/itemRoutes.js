const express = require ('express');
const sqlRouter = express.Router();
const https = require('https');
const db = require('../model/db.js');
const init = require('../model/init.js');

sqlRouter.get("/", (req, res) => {
    res.render("results");
});

sqlRouter.post("/", (req,res) => {
/*     db.query("SELECT * FROM item WHERE status = 1")
    .then(([items, _]) => {
        res.render("results", {
            body: req.body,
            items: items
        });
    }) */
    res.render("results");
    
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
