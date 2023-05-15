const express = require("express");
const router = express.Router();
const noteCtrl = require("../controllers/notes");

//router to view new note form
router.get("/:id/new", noteCtrl.newNote);

module.exports = router;
