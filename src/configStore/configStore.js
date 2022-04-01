import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './wordSearch';

const store = configureStore({ reducer });

export default store;
