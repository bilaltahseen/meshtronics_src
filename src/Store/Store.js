import React, { createContext, useReducer } from 'react';
export const Store = createContext();

const initialState = {
  data: {},
  logged: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return { ...state, data: action.payload };
    case 'LOGIN_STATUS':
      return { ...state, logged: true };
    default:
      return { ...state };
  }
};
const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={[state, dispatch]}>{props.children}</Store.Provider>
  );
};

export default StoreProvider;
