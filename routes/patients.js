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
// router.delete("/:id", patientCtrl.deletePatient);

//route to soft delete patient - update route because we are updating the isDeleted on the patient
router.put("/:id", patientCtrl.softDelete);

//route to show discharged patients
router.get("/discharge/index", patientCtrl.indexDischarge);

//route to unDelete patient
router.put("/patients/", patientCtrl.unDelete);

module.exports = router;
