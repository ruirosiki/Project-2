const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  noteTitle: String,
  noteContent: String,
  //   signature: {
  //     type: String,
  //     required: true,
  //   },
  noteDate: { type: Date, required: true },
  //   timestamps: true,
});

module.exports = noteSchema;
