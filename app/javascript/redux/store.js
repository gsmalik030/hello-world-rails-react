import {congifureStore} from '@reduxjs/toolkit';
import greetingsSlice  from './greetingsSlice';
export const store = congifureStore({
    reducer: {
        // reducers
        greeting: greetingsSlice
    }
});
