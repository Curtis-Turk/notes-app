/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesApi = require("./api");
const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

require("jest-fetch-mock").enableMocks();

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

  it("adds a note to the list", () => {
    const model = new NotesModel();

    const inputEl = document.querySelector("#note-input");

    inputEl.value = "my added note";
    model.addNote(inputEl.value);

    const view = new NotesView(model);
    view.displayNotes();

    expect(document.querySelectorAll(".note").length).toBe(1);
  });
  it("displays the notes from the API", () => {
    const model = new NotesModel();
    const api = new NotesApi();
    const view = new NotesView(model, api);

    fetch.mockResponseOnce(JSON.stringify(["Example 1", "Example 2"]));

    view.displayNotesFromApi(() => {
      expect(document.querySelector(".note").length).toEqual(2);
      expect(document.querySelector(".note").textContent).toBe("Example 1");
    });
  });
});
