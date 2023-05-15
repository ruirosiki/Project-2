const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    //reference patient to tie note to patient
    ref: "Patient",
  },
  noteTitle: String,
  content: String,
  signature: {
    type: String,
    required: true,
  },
  date: Date,
  //DO I NEED TO ADD THIS? Since the user is already embedded in the patient.
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  //   timestamps: true,
});

module.exports = noteSchema;
