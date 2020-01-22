import React, { useReducer } from 'react';

import {
  bookReducer,
  initialStateBook,
} from './book-reducer';

export const Store = React.createContext();

type Props = {
  children: React$Node,
};

export function StoreProvider(props: Props) {
  const mainReducer = {
    book: useReducer(bookReducer, initialStateBook),
  };
  return <Store.Provider value={mainReducer}>{props.children}</Store.Provider>;
}
