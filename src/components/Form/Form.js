import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import { addContact } from '../../redux/contacts/contacts-operations';
import styles from './Form.module.css';
import PropTypes from 'prop-types';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    const { onSubmit, contacts } = this.props;
    e.preventDefault();
    const originName = contacts.find(
      ({ name }) => name.toLowerCase() === this.state.name.toLowerCase(),
    );
    const originNumber = contacts.find(
      ({ number }) => number === this.state.number,
    );
    if (originName) {
      alert(`${this.state.name} is already in contacts`);
      return;
    }
    if (originNumber) {
      alert(`${this.state.number} is already in contacts`);
      return;
    }
    onSubmit({ ...this.state });
  };

  handleNameChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          <span className={styles.labelName}>Name</span>
          <input
            className={styles.info}
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={this.handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name can only contain letters, apostrophes, dashes and spaces."
            required
          />
        </label>
        <label className={styles.label}>
          <span className={styles.labelName}>Number</span>
          <input
            className={styles.info}
            type="tel"
            name="number"
            value={number}
            placeholder="Enter your number"
            onChange={this.handleNameChange}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="
            The phone number must be 11-12 digits and can contain numbers, spaces, dashes, bully brackets and can start with +"
            required
          />
        </label>
        <button type="submit" className={styles.add}>
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};

const mapStateToProps = state => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: item => dispatch(addContact(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
