import { configureStore } from '@reduxjs/toolkit'
import auth from './authSlice';
import activate from './activateSlice';

// here we are passing the both reducer to the store.

export const store = configureStore({
  reducer: {
    auth,
    activate
  },
})