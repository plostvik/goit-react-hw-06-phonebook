import React from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import style from './App.module.css';
import { CSSTransition } from 'react-transition-group';

const App = () => {
  return (
    <>
      <CSSTransition in={true} appear={true} timeout={500} classNames={style}>
        <h1 className={style.title}>Phonebook</h1>
      </CSSTransition>
      <ContactForm />
      <h2 className={style.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
