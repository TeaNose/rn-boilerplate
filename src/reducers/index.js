import React, {useReducer} from 'react';
import PropTypes from 'prop-types';

import {bookReducer, initialStateBook} from './book-reducer';

export const Store = React.createContext();

export function StoreProvider(props) {
  const {children} = props;
  const mainReducer = {
    book: useReducer(bookReducer, initialStateBook),
  };
  return <Store.Provider value={mainReducer}>{children}</Store.Provider>;
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
