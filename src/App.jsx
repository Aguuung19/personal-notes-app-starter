import React from "react";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ArchivePage from "./pages/ArchivePage";
import AddNotePage from "./pages/AddNotePage";
import { Routes, Route } from 'react-router-dom';
import { getAllNotes } from "./utils/local-data";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    this.setState((prevState) => ({
      notes: [newNote, ...prevState.notes],
    }));
  }

  render() {
    const activeNotes = this.state.notes.filter((note) => !note.archived);
    const archivedNotes = this.state.notes.filter((note) => note.archived);

    return (
      <div className="app-container">
        <header className="notes-app__header">
          <h1>Personal Notes App</h1>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  notes={activeNotes} // Kirim catatan aktif ke HomePage
                  onDelete={this.onDeleteHandler} // Kirim fungsi hapus
                  onArchive={this.onArchiveHandler} // Kirim fungsi arsip
                />
              }
            />
            <Route
              path="/archieved"
              element={
                <ArchivePage
                  notes={archivedNotes} // Kirim catatan arsip ke ArchivePage
                  onDelete={this.onDeleteHandler} // Kirim fungsi hapus
                  onArchive={this.onArchiveHandler} // Kirim fungsi batal arsip
                />
              }
            />
            <Route
              path="/addNote"
              element={<AddNotePage onAddNote={this.onAddNoteHandler} />}
            />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;