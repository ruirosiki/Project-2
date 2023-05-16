const mongoose = require("mongoose");
const noteSchema = require("./note");
const diagnosisSchema = require("./diagnosis");
//defines patient schema
const patientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    // enum: "^(([0-9]{3})|[0-9]{3}-)[0-9]{3}-[0-9]{4}$",
  },
  //attaches patient to single user
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  //use note schema to add many notes
  note: [noteSchema],
  //use diagnosis schema to add many diagnosis
  // diagnosis: [diagnosisSchema],
  // timestamps: true,
});

module.exports = mongoose.model("Patient", patientSchema);
