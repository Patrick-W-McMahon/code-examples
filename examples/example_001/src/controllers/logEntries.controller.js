const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const Model = require('../models/logEntries.model');

router.post('/', (req, res) => {
    Model.create({
          id: req.body.id,
          created_at: req.body.created_at,
          user_name: req.body.user_name
      },
      (err, data) => err ?
          res.status(500).send("There was a problem adding the information to the database.") :
          res.status(200).send(data)
    );
});

router.get('/', (req, res) => {
    Model.find({}, (err, data) => err ?
      res.status(500).send("There was a problem finding the log entries.") :
      res.status(200).send(data)
    );
});

module.exports = router;
