const Patient = require("../models/patient");

//READ - index of patients
function index(req, res, next) {
  //find all patients of currently logged in user
  Patient.find({ user: req.user._id })
    //query.then for patients
    .then((patients) => {
      //render any found patients
      res.render("patients/index", {
        //open patients object to pass to views
        patients,
        title: "My Patients",
      });
    })
    //catch any errors and pass to the next middleware in the pipeline
    .catch(next);
}

//2 Steps GET router to get the form (READ), another to insert data into database (CREATE)
//READ - render new Patient form.
function newPatient(req, res) {
  res.render("patients/new", { title: "New Patient" });
}
//CREATE new patient
function create(req, res, next) {
  //new patient must have a user
  // assign the logged in user to the req.body
  req.body.user = req.user._id;
  //create patient and add to the
  Patient.create(req.body)
    .then(() => res.redirect("/patients"))
    .catch(next);
}

//READ - individual patient page
function show(req, res, next) {
  //get the patient id.
  Patient.findById(req.params.id)
    .then((patient) => {
      res.render("patients/show", {
        patient,
        title: "Patient Details",
      });
    })
    .catch(next);
}
//2 Steps to Update 1. render update form and 2. actually push the update to database
//READ - STEP 1: render a form to update patient details
function updatePatientForm(req, res) {
  Patient.findById(req.params.id).then((patient) => {
    res.render("patients/edit", {
      patient,
      title: "Update Patient Details",
    });
  });
}

//UPDATE - STEP 2: update the database with edited information
function update(req, res, next) {
  Patient.findById(req.params.id)
    //update patient req.body
    .then((patient) => {
      return patient.updateOne(req.body);
    })
    //redirect to patient page
    .then(() => res.redirect(`/patients/${req.params.id}`))
    .catch(next);
}

//DELETE - delete patient from the database
function deletePatient(req, res, next) {
  Patient.findById(req.params.id)
    .then((patient) => {
      return patient.deleteOne();
    })
    .then(() => res.redirect("/patients"))
    .catch(next);
}
module.exports = {
  index,
  newPatient,
  create,
  show,
  updatePatientForm,
  update,
  deletePatient,
};
