// import { combineReducers, createStore } from 'redux';
import { contactsReducer } from './phonebook/phonebookReducer.js';
import { filterReducer } from './phonebook/phonebookReducer.js';
import { configureStore } from '@reduxjs/toolkit';

// ---------before redux toolkit-----------
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
