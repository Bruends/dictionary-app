import { configureStore, applyMiddleware } from '@reduxjs/toolkit';


const initialState = {
    loading: false,
    data: null,
    error: null
}

// config the reducer
const wordReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_START':
            return {data: null, loading: true, error: null}
        case 'FETCH_SUCCESS':
            return {...state, loading: false, data: action.payload}
        case 'FETCH_ERROR':
            return {...state, loading: false, error: action.payload}
        default:
            return state; 
    }
}

const store = configureStore({reducer: wordReducer});

export default store