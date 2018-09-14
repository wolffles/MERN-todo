const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const TaskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Task = mongoose.model('item', TaskSchema);
