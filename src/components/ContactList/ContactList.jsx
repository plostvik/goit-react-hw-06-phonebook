import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';
import styles from './ContactList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      }),
    ).isRequired,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.contacts !== this.props.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
    }
  }

  render() {
    const { contacts } = this.props;
    return (
      <TransitionGroup component="ul" className={styles.contactList}>
        {contacts.map(el => {
          return (
            <CSSTransition key={el.id} classNames={styles} timeout={250}>
              <ContactListItem contact={el} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    );
  }
}

const mapStateToProps = state => {
  const { contacts, filter } = state;
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return {
    contacts: visibleContacts,
  };
};

export default connect(mapStateToProps)(ContactList);
