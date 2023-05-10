import React, { Component } from 'react';
import { StyledForm } from './ContactForm.styled';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
  state = { name: '', number: '' };

  inputNameId = nanoid();
  inputPhoneId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onSubmit(newContact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <h1 className="form-title">{this.props.title}</h1>
        <label htmlFor={this.inputNameId} className="form-label">
          <span className="form-span">Name:</span>
          <input
            className="form-input"
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor={this.inputNameId} className="form-label">
          <span className="form-span">Number:</span>
          <input
            className="form-input"
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" onClick={this.handle} className="form-btn">
          Add Contact
        </button>
      </StyledForm>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
