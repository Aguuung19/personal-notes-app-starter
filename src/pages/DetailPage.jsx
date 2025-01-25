import React from "react";
import { useParams } from "react-router-dom";
import NoteItemDetail from "../components/NoteItemDetail";
import { getNote } from "../utils/local-data";

function DetailPageWrapper() {
    const { id } = useParams();

    return <DetailPage id={Number(id)} />
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: getNote(props.id)
        };
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

export default DetailPageWrapper;