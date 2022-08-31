/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

describe("Page view", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });
  it("displays the notes", () => {
    const model = new NotesModel();
    model.addNote("first note");
    model.addNote("second note");
    const view = new NotesView(model);

    view.displayNotes();

    expect(document.querySelectorAll(".note").length).toBe(2);
  });
});
