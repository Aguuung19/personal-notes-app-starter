import React from 'react';
import NoteItemList from '../components/NoteItemList';
import { getAllNotes } from '../utils/local-data';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes()
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
    const  activeNotes  = this.state.notes.filter((note) => !note.archived);
    return (
      <section className='homepage'>
        <h2>Catatan Aktif</h2>
        {activeNotes.length > 0 ? (
          <NoteItemList
            notes={activeNotes}
            onArchive={this.onArchiveHandler}
            onDelete={this.onDeleteHandler}
          />
        ) : (
            <div className="note-list-empty">
              <p>Belum Ada Catatan</p>
          </div>
        )}
      </section>
        
    );
  }
}

export default HomePage;
