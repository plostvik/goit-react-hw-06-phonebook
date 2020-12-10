// import { ADD_CONTACT, REMOVE_CONTACT, FILTER_CHANGE } from './actionTypes.js';
import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

// ---------before redux toolkit-----------

// const addContact = (name, number) => ({
//   type: ADD_CONTACT,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const removeContact = contactId => ({
//   type: REMOVE_CONTACT,
//   payload: {
//     contactId,
//   },
// });

// const filterChange = filter => ({
//   type: FILTER_CHANGE,
//   payload: {
//     filter,
//   },
// });

const addContact = createAction('ADD_CONTACT', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const removeContact = createAction('REMOVE_CONTACT');
const filterChange = createAction('FILTER_CHANGE');

export { addContact, removeContact, filterChange };
