import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import initState from './initState';
import Reducer from './Reducer';

export const StateContext = createContext();

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(Reducer, initState)}>
    {children}
  </StateContext.Provider>
);
export const useStoreValue = () => useContext(StateContext);

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
