const mongoose = require("mongoose");

const diagnosisSchema = new mongoose.Schema({
  diagnosis: String,
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
  },
});

module.exports = diagnosisSchema;
