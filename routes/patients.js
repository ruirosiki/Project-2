const express = require("express");
const router = express.Router();

//need to require patients controller to route patient actions
const patientCtrl = require("../controllers/patients");

//localhost:300/patients
//list of patients of currently logged in user
router.get("/", patientCtrl.index);

//route for new patient form
router.get("/new", patientCtrl.newPatient);

//route for creating a new patient
router.post("/", patientCtrl.create);

//route for viewing individual patient
router.get("/:id", patientCtrl.show);

//route to edit the patient information
router.get("/:id/edit", patientCtrl.updatePatientForm);

//route to put/patch the updated patient information.
router.put("/:id", patientCtrl.update);

//route to delete patient
router.delete("/:id", patientCtrl.deletePatient);

module.exports = router;
