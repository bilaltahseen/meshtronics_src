import React, { createContext, useReducer } from 'react';
export const Store = createContext();

const initialState = {
  coursePos: 0,
  lightBox: false,
  currentVideo: '',
  data: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_COURSE_OFFSET':
      return { ...state, coursePos: action.payload };
    case 'REMOVE_LIGHTBOX':
      return { ...state, lightBox: !state.lightBox };
    case 'SHOW_VIDEO':
      return { ...state, currentVideo: action.payload };
    case 'GET_DATA':
      return { ...state, data: action.payload };
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
