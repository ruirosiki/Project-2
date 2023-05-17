const Patient = require("../models/patient");
// const Note = require("../models/note");

//READ - render new note form
function newNote(req, res, next) {
  Patient.findById(req.params.patientId).then((patient) => {
    res.render("notes/new", {
      patient,
      title: "New Patient Note",
    });
  });
}

//CREATE - creates a note and then redirects back to patients page
function createNote(req, res, next) {
  //create note and add to the patient
  Patient.findById(req.params.patientId)
    .then((patient) => {
      patient.note.push(req.body);
      return patient.save();
    })
    .then(() => res.redirect(`/patients/${req.params.patientId}`))
    .catch(next);
}

//READ - render individual notes page
function show(req, res, next) {
  Patient.findById(req.params.patientId)
    .then((patient) => {
      const note = patient.note.id(req.params.noteId);
      res.render("notes/show", {
        patient,
        note,
        title: "Patient Note",
      });
      console.log(req.params.noteId);
    })
    .catch(next);
}

//READ - render edit patient note page
function updateNoteForm(req, res, next) {
  Patient.findById(req.params.patientId)
    .then((patient) => {
      const note = patient.note.id(req.params.noteId);
      res.render("notes/edit", {
        patient,
        note,
        title: "Edit Patient Note",
      });
      console.log(req.params.noteId);
    })
    .catch(next);
}

//UPDATE - STEP 2: update the note in database with edited information
function update(req, res, next) {
  Patient.findById(req.params.patientId)
    .then((patient) => {
      const theNote = patient.note.id(req.params.noteId);
      theNote.set(req.body);
      patient.save();
    })
    .then(() =>
      res.redirect(`/patients/${req.params.patientId}/${req.params.noteId}`)
    )
    .catch(next);
}

function deleteNote(req, res, next) {
  Patient.findById(req.params.patientId)
    .then((patient) => {
      const noteId = patient.note.id(req.params.noteId);
      patient.note.id(noteId).deleteOne();
      return patient.save();
    })
    .then(() => res.redirect(`/patients/${req.params.patientId}`));
}

module.exports = {
  newNote,
  createNote,
  show,
  updateNoteForm,
  update,
  deleteNote,
};
