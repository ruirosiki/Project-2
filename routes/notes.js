const express = require("express");
const router = express.Router();
const noteCtrl = require("../controllers/notes");

//router to view new note form
router.get("/patients/:patientId/notes/new", noteCtrl.newNote);

//route to add note to patient
router.post("/patients/:patientId/notes", noteCtrl.createNote);

//route to view individual note
router.get("/patients/:patientId/:noteId", noteCtrl.show);

//route to edit patient note
router.get("/patients/:patientId/:noteId/edit", noteCtrl.updateNoteForm);

//route to PUT update info into patient note
router.put("/patients/:patientId/:noteId", noteCtrl.update);

//route to DELETE note
router.delete("/patients/:patientId/:noteId", noteCtrl.deleteNote);

module.exports = router;
