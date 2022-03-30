import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

// config the reducer
const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { data: null, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const store = configureStore({ reducer: asyncReducer });

export default store;
