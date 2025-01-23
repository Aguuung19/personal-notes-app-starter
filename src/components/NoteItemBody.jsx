import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";

function NoteItemBody({ title, body, createdAt }) {
    return (
        <div className="note-item__content">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__date">{showFormattedDate(createdAt)}</p>
            <p className="note-item__body">{body}</p>
        </div>
    );
}

NoteItemBody.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.number.isRequired,
}

export default NoteItemBody;
