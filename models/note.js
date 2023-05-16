const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  noteTitle: String,
  noteContent: String,
  //   signature: {
  //     type: String,
  //     required: true,
  //   },
  noteDate: Date,
  //   timestamps: true,
});

module.exports = noteSchema;
