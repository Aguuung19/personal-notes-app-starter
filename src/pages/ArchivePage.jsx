import React from "react";
import NoteItemList from "../components/NoteItemList";
import { getAllNotes } from "../utils/local-data";

class ArchivePage extends React.Component {
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
      const archiveNotes = this.state.notes.filter((note) => note.archived);
      console.log(archiveNotes);
    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        {archiveNotes.length > 0 ? (
          <NoteItemList
            notes={archiveNotes}
            onArchive={this.onArchiveHandler}
            onDelete={this.onDeleteHandler}
          />
        ) : (
          <div className="note-list-empty">
            <p>Belum Ada Catatan yang di Arsipkan</p>
          </div>
        )}
      </section>
    );
  }
}

export default ArchivePage;
