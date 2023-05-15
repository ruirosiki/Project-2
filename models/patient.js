const mongoose = require("mongoose");
const noteSchema = require("./note");
const diagnosisSchema = require("./diagnosis");
//defines patient schema
const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: Number,
  //attaches patient to single user
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  //use note schema to add many notes
  patientNote: [noteSchema],
  //use diagnosis schema to add many diagnosis
  diagnosis: [diagnosisSchema],
  timestamps: true,
});

module.exports = mongoose.model("Patient", patientSchema);
