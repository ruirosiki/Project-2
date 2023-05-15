const Patients = require("../models/patient");

//READ - index of patients
function index(req, res, next) {
  //find all patients of currently logged in user
  Patients.find({ user: req.user._id })
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

function newPatient(req, res, next) {
  res.render("patients/new");
}

module.exports = {
  index,
  newPatient,
};
