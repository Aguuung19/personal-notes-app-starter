import React from 'react';
import PropTypes from 'prop-types';
import NoteItemList from '../components/NoteItemList';

function HomePage({ notes, onArchive, onDelete, keyword }) {
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

HomePage.propTypes = {
  notes: PropTypes.array.isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default HomePage;
