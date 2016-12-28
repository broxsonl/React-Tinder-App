'use strict';

export function selectBook(book) {
  // selectBook is an ActionCreator and needs to return an action (an object with a type property)

  //Actions always have a type, and sometimes also a payload.
  // Action types are typically uppercase, and usually in separate file
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
}
