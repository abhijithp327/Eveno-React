import { configureStore } from "@reduxjs/toolkit";
import authReducer  from './features/authSlice';
import countryReducer  from './features/countrySlice';
import eventReducer  from './features/eventSlice';


export const store = configureStore({
    reducer: {
        auth: authReducer,
        country: countryReducer,
        event: eventReducer
    },
});