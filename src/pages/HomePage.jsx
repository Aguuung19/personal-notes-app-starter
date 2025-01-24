import React from 'react';
import NoteItemList from '../components/NoteItemList';

function HomePage({ notes, onArchive, onDelete }) {
  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      {notes.length > 0 ? (
        <NoteItemList
          notes={notes}
          onArchive={onArchive}
          onDelete={onDelete}
        />
      ) : (
        <div className="note-list-empty">
          <p>Belum ada Catatan</p>
        </div>
      )}
    </section>
  );
}

export default HomePage;
