const Note = require("../models/note");
const Patient = require("../models/patient");

//READ - render new note form
function newNote(req, res, next) {
  Patient.findById(req.params.id).then((patient) => {
    res.render("notes/new", {
      patient,
      title: "New Patient Note",
    });
  });
}

function createNote(req, res, next) {}

module.exports = {
  newNote,
  createNote,
};
