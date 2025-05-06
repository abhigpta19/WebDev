import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from './slices/counterSlice';
import ThemeReducer from './slices/themeSlice';

export const store = configureStore({
    reducer : {
        counter : CounterReducer,
        theme : ThemeReducer
    }
});