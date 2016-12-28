'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={ () => this.props.selectBook(book)}
          className="list-group-item"> {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// Below function connects React to Redux.
function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

// Anything returns from this function will end up as props on the BookList container
function mapDispatchToProps (dispatch) {
  // Take what gets returned from the selectBook function when it is called, and then dispatch will ensure the returned value gets put through all of the reducers.
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
