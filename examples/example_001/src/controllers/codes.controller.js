const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const Model = require('../models/codes.model');

router.post('/', (req, res) => {
    Model.create({
          id: req.body.id,
          code: req.code,
          description: req.body.description
      },
      (err, data) => err ?
          res.status(500).send("There was a problem adding the information to the database.") :
          res.status(200).send(data)
    );
});

router.get('/', (req, res) => {
    Model.find({}, (err, data) => err ?
      res.status(500).send("There was a problem finding the codes.") :
      res.status(200).send(data)
    );
});

module.exports = router;
