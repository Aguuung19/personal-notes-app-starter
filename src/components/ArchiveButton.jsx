import React from "react";
import PropTypes from "prop-types";
import { FiArchive } from "react-icons/fi";
import { MdOutlineRestorePage } from "react-icons/md";

function ArchiveButton({ id, archived, onArchive }) {
    return (
        <button className="note-item__archive-button" onClick={() => onArchive(id)}>
            {archived ? <MdOutlineRestorePage />  : <FiArchive />}
        </button>
    )
}

ArchiveButton.propTypes = { 
    id: PropTypes.number.isRequired,
    archived: PropTypes.bool.isRequired,
    onArchive: PropTypes.func.isRequired,
}

export default ArchiveButton;