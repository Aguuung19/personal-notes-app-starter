import React from "react";
import InputNoteForm from "../components/InputNoteForm";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function AddNotePage({ onAddNote }) {
    const navigate = useNavigate();

    const handleAddNote = (note) => {
        onAddNote(note);
        navigate("/");
    };

    return (
        <section className="add-note-page">
            <h2>Tambah Catatan</h2>
            <InputNoteForm onAddNote={handleAddNote} />
        </section>
    );
}

AddNotePage.propTypes = {
    onAddNote: PropTypes.func.isRequired,
}

export default AddNotePage;
