class NotesView {
  constructor(model) {
    this.model = model;
    this.body = document.querySelector("body");
  }
  displayNotes() {
    let notes = this.model.getNotes();
    notes.forEach((note) => {
      let createNote = document.createElement("div");
      createNote.className = "note";
      createNote.innerText = note;
      this.body.append(createNote);
    });
  }
}

module.exports = NotesView;
