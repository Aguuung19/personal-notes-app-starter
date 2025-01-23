import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import NoteItemList from '../components/NoteItemList';
import { getAllNotes , getActiveNotes } from '../utils/local-data';


class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
    };
    
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
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

  render() {
    return (
      <div className="app-container">
        <header className="notes-app__header">
          <h1>Personal Notes App</h1>
          <Navigation />
        </header>
        <main>
          <Routes>

          </Routes>
          <h2>Hello, World</h2>
          {getActiveNotes.length > 0 ? (
            <NoteItemList
              notes={getActiveNotes}
              onArchive={this.onArchiveHandler}
              onDelete={this.onDeleteHandler}
              />
          ) : (
            <p className="notes-list__empty-message">Belum Ada Catatan Aktif</p>
          )}
        </main>
      </div>
    );
  }
}

export default HomePage;
