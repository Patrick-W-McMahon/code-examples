const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const Model = require('../models/logEntryCode.model');

router.post('/', (req, res) => {
    Model.create({
          log_entry_id: req.body.log_entry_id,
          code_id: req.body.code_id,
          primary_key: req.body.primary_key
      },
      (err, data) => err ?
          res.status(500).send("There was a problem adding the information to the database.") :
          res.status(200).send(data)
    );
});

router.get('/', (req, res) => {
    Model.find({}, (err, data) => err ?
      res.status(500).send("There was a problem finding the log entry codes.") :
      res.status(200).send(data)
    );
});

module.exports = router;
