const express = require("express");
const router = express.Router();

//need to require patients controller to route patient actions
const patientCtrl = require("../controllers/patients");

//localhost:300/patients
//list of patients of currently logged in user
router.get("/", patientCtrl.index);

//route for new patient form
router.get("/new", patientCtrl.newPatient);

module.exports = router;
