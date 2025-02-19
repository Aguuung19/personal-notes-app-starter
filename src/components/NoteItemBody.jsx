import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { showFormattedDate } from "../utils";
import parser from 'html-react-parser';

function NoteItemBody({ id, title, body, createdAt }) {
    return (
      <div className="note-item__content">
        <h3 className="note-item__title">
                <Link to={`/notes/${id}`}>
            {title}
          </Link>
        </h3>
        <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
        <div className="note-item__body">{parser(body)}</div>
      </div>
    );
}

NoteItemBody.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
}

export default NoteItemBody;
