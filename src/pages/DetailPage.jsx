import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import NoteItemDetail from "../components/NoteItemDetail";
import { getNote } from "../utils/local-data";

function DetailPageWrapper({ notes }) {
    const { id } = useParams();

    return <DetailPage id={Number(id)} notes={notes} />
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: this.findNoteById(props.id)
        };
    }

    findNoteById(id) {
        const { notes } = this.props;
        return notes.find((note) => note.id === id);
    }

    render() {

        const { note } = this.state;

        if (!note) {
            return <p>Note is not found!</p>;
        }

        return (
            <section>
                <NoteItemDetail {...note} />
          </section>  
        );
    }
}

DetailPage.propTypes = {
    id: PropTypes.number.isRequired,
    notes: PropTypes.array.isRequired,
};

export default DetailPageWrapper;