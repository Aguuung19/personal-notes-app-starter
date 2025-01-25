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
    this.onBodyInputHandler = this.onBodyInputHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState({ title: event.target.value });
  }

  onBodyInputHandler(event) {
    this.setState({ body: event.target.innerHTML });
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
      <section className="add-new-page__input">
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            className="add-new-page__input__title"
            placeholder="Judul Catatan"
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
            required
          />
          <div
            className="add-new-page__input__body"
            data-placeholder="Isi Catatan"
            contentEditable
            onInput={this.onBodyInputHandler}
          ></div>
          <button className="add-new-page__action" type="submit">
            Tambah
          </button>
        </form>
      </section>
    );
  }
}

export default InputNoteForm;
