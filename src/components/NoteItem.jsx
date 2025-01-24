import React from "react";
import PropTypes from "prop-types";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItem({ title, body, createdAt, id, onDelete, archived, onArchive }) {
    return (
      <section className="note-item">
        <NoteItemBody title={title} body={body} createdAt={createdAt} />
        <div className="note-item__action">
          <div className="action">
            <DeleteButton
              className=""
              id={id}
              onDelete={onDelete}
            />
          </div>
          <div className="action">
            <ArchiveButton
              className=""
              id={id}
              archived={archived}
              onArchive={onArchive}
            />
          </div>
        </div>
      </section>
    );
}

NoteItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    archived: PropTypes.bool.isRequired,
    onArchive: PropTypes.func.isRequired,
}

export default NoteItem;