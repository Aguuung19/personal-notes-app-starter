import React from "react";
import PropTypes from "prop-types";

class InputNoteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
        };

          this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
          this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
          this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        this.setState({ title: event.target.value });
    }

    onBodyChangeHandler(event) {
        this.setState({ body: event.target.value });
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.onAddNote({
            title: this.state.title,
            body: this.state.body,
        });
        this.setState({ title: "", body: "" });
    }

    render() {
        return (
            <form className="note-input" onSubmit={this.onSubmitHandler}>
                <input
                    type="text"
                    placeholder="Judul Catatan"
                    value={this.state.title}
                    onChange={this.onTitleChangeHandler}
                    required
                />
                <textarea
                    placeholder="Isi Catatan"
                    value={this.state.body}
                    onChange={this.onBodyChangeHandler}
                    required
                />
                <button type="submit">Tambah</button>
            </form>
        );
    }
}

InputNoteForm.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
}

export default InputNoteForm;