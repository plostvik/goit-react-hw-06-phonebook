import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';
import { connect } from 'react-redux';
import { removeContact } from '../../redux/phonebook/phonebookActions';

const ContactListItem = ({ contact, removeContact }) => {
  return (
    <div className={styles.wrapper}>
      <li className={styles.listItem}>
        {contact.name}: <span>{contact.number}</span>
      </li>
      <button
        type="button"
        onClick={() => removeContact(contact.id)}
        className={styles.btn}
      >
        X
      </button>
    </div>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
  removeContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  contact: ownProps.contact,
});

const mapDispatchToProps = {
  removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
