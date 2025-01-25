import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";

function NoteItemDetail({ title, body, createdAt }) {
    return (
        <div className="detail-page">
            <h2 className="detail-page__title">{title}</h2>
            <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
            <p className="detail-page__body">{ body }</p>
      </div>  
    );
}

NoteItemDetail.propTypes = {
     title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
}

export default NoteItemDetail;