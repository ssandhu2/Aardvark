const express = require ('express');
const sqlRouter = express.Router();
const https = require('https');
const database = require('../model/db.js');
const init = require('../model/init.js');

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
