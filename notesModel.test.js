const NotesModel = require("./notesModel");

describe("model", () => {
  it("Initializes", () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  });
  it("Adds two notes", () => {
    const model = new NotesModel();
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    expect(model.getNotes()).toEqual(["Buy milk", "Go to the gym"]);
  });
  it("Rests notepad", () => {
    const model = new NotesModel();
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
});
