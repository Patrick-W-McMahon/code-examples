const mongoose = require('mongoose');
const schema = {
  id: String,
  created_at: String,
  user_name: String
};
const table = 'log_entries';
mongoose.model(table, new mongoose.Schema(schema));
module.exports = mongoose.model(table);
