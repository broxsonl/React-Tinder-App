import { combineReducers } from 'redux';
import BooksReducer from './reducer-books.js';

const rootReducer = combineReducers({
  // key is books, the piece of state. BooksReducer is the value of the state. Global key/value pair returned from the Bood Reducer.
  // Can have infinite num of Reducers that we can create key value pairs with in this rootReducer.
  books: BooksReducer,
});

export default rootReducer;
