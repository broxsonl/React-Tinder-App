'use strict';

// State argument is not app state, only state the reducer is responsible for.
export default function(state = null, action) {
  if (action.type === 'BOOK_SELECTED') {
    return action.payload;
  }
  return state;
}
