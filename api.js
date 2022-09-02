class NotesApi {
  loadData(callback) {
    fetch("http://localhost:3000/notes")
      .then((response) => response.json())
      .then((json) => callback(json));
  }
}

module.exports = NotesApi;
