// import { ADD_CONTACT, REMOVE_CONTACT, FILTER_CHANGE } from './actionTypes.js';
import { addContact, removeContact, filterChange } from './phonebookActions.js';
import { createReducer } from '@reduxjs/toolkit';

const getStorageContacts = JSON.parse(localStorage.getItem('contacts')) || [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialState = {
  contacts: getStorageContacts,
  filter: '',
};

// ---------before redux toolkit-----------

// const contactsReducer = (state = initialState.contacts, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:

//       return [...state, payload];

//     case REMOVE_CONTACT:
//       return state.filter(item => item.id !== payload.contactId);
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = initialState.filter, { type, payload }) => {
//   switch (type) {
//     case FILTER_CHANGE:
//       return payload.filter;
//     default:
//       return state;
//   }
// };

const addContactFn = (state, action) => [...state, action.payload];
const removeContactFn = (state, action) =>
  state.filter(item => item.id !== action.payload);

const contactsReducer = createReducer(initialState.contacts, {
  [addContact]: addContactFn,
  [removeContact]: removeContactFn,
});

const filterReducer = createReducer(initialState.filter, {
  [filterChange]: (state, action) => action.payload,
});

export { contactsReducer, filterReducer };
