const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

const model = new NotesModel();

model.addNote("first note");
model.addNote("second note");

const view = new NotesView(model);

view.displayNotes();

console.log("The notes app is running ");
