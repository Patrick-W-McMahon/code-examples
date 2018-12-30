const mongoose = require('mongoose');
const schema = {
  id: String,
  code: String,
  description: String
};
const table = 'code';
mongoose.model(table, new mongoose.Schema(schema));
module.exports = mongoose.model(table);
