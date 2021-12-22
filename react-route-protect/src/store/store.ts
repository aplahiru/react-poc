import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

// store creation
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
