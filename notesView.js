class NotesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.body = document.querySelector("body");

    this.addNoteBtnEl = document.querySelector("#add-note-button");

    this.addNoteBtnEl.addEventListener("click", () => {
      this.addInputNote();
      this.displayNotes();
    });

    this.resetBtnEl = document.querySelector("#reset-notes-button");

    this.resetBtnEl.addEventListener("click", () => {
      this.resetModel();
      this.removeNoteEls();
    });
  }

  addInputNote() {
    const textEl = document.querySelector("#note-input");
    let noteArr = this.model.getNotes();
    if (textEl.value == noteArr[noteArr.length - 1]) {
      return null;
    } else {
      this.model.addNote(textEl.value);
    }
  }

  displayNotes() {
    this.removeNoteEls();
    let notes = this.model.getNotes();

    notes.map((note) => {
      let createNote = document.createElement("div");
      createNote.className = "note";
      createNote.innerText = note;
      this.body.append(createNote);
    });
  }

  displayNotesFromApi() {
    this.api.loadData((data) => {
      this.model.setNotes(data);
      this.displayNotes();
    });
  }

  removeNoteEls() {
    const noteEls = document.querySelectorAll(".note");
    noteEls.forEach((e) => {
      e.remove();
    });
  }

  resetModel() {
    this.model.reset();
  }
}

module.exports = NotesView;
