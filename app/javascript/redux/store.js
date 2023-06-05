import {congigureStore} from '@reduxjs/toolkit';
import greetingsSlice  from './greetingsSlice';
export const store = congigureStore({
    reducer: {
        // reducers
        greeting: greetingsSlice
    }
});