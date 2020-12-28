const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Board Schema
const BoardSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  boardData: {
    type: Array,
    require: true,
  },
  userID: {
    type: String,
    require: true,
  },
  background: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
});

module.exports = Boards = mongoose.model("board", BoardSchema);
