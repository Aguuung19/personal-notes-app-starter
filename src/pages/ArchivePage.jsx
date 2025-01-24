import React from "react";
import NoteItemList from "../components/NoteItemList";

function ArchivePage({ notes, onArchive, onDelete }) {
  return (
    <section className="archive-page">
      <h2>Catatan Diarsipkan</h2>
      {notes.length > 0 ? (
        <NoteItemList
          notes={notes} // Data catatan
          onArchive={onArchive} // Fungsi batal arsip
          onDelete={onDelete} // Fungsi hapus
        />
      ) : (
        <div className="note-list-empty">
          <p>Tidak Ada Catatan yang Diarsipkan</p>
        </div>
      )}
    </section>
  );
}

export default ArchivePage;
