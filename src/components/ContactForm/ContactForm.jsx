import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/phonebook/phonebookActions.js';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import notificationAnimations from '../Notification/Notification.module.css';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
  };

  state = {
    name: '',
    number: '',
    isExists: false,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts, addContact } = this.props;
    if (contacts.some(el => el.name === name)) {
      this.setState({ isExists: true });
    } else {
      addContact(name, number);
      this.setState({ name: '', number: '' });
    }
    setTimeout(() => this.setState({ isExists: false }), 1500);
  };

  render() {
    const { name, number, isExists } = this.state;
    return (
      <>
        <form
          action="submit"
          onSubmit={this.handleSubmit}
          className={styles.contactform}
        >
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
            className={styles.input}
          />
          <label htmlFor="number" className={styles.label}>
            Number
          </label>
          <input
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={number}
            className={styles.input}
          />
          <input type="submit" value="Add Contact" className={styles.button} />
        </form>
        <CSSTransition
          in={isExists}
          timeout={250}
          unmountOnExit
          classNames={notificationAnimations}
        >
          <Notification message="Contact already exists!" />
        </CSSTransition>
      </>
    );
  }
}

const mapStateToProps = ({ contacts }) => ({ contacts });

const mapDispatchToProps = {
  addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
