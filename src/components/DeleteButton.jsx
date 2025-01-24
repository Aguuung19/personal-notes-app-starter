import React from "react";
import PropTypes from "prop-types";
import { MdOutlineDelete } from "react-icons/md";


function DeleteButton({ id, onDelete }) {
    return <button className="note_item__delete-button" onClick={() => onDelete(id)}><MdOutlineDelete /></button>    
}

DeleteButton.propTypes = {
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;