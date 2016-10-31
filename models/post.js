var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: Date
});

module.exports = mongoose.model('Post', PostSchema);