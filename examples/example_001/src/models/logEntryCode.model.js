const mongoose = require('mongoose');
const schema = {
  log_entry_id: String,
  code_id: String,
  primary_key: String
};
const table = 'log_entry_code';
mongoose.model(table, new mongoose.Schema(schema));
module.exports = mongoose.model(table);
