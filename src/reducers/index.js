import { combineReducers } from 'redux';
import BooksReducer from './reducer-books.js';
import ActiveBookReducer from './reducer-active-book';

const rootReducer = combineReducers({
  // key is books, the piece of state. BooksReducer is the value of the state. Global key/value pair returned from the Bood Reducer.
  books: BooksReducer,
  activeBook: ActiveBookReducer,
});

export default rootReducer;
