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

//CREATE - 2 Steps GET router to get the form, another to insert data into database
//render new Patient form.
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

module.exports = {
  index,
  newPatient,
  create,
  show,
};
