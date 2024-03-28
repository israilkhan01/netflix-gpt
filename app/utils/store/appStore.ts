import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./slices/userSlice"
import movieReducer from './slices/movieSlices';
export const store = () => configureStore({
    reducer: {
      "user":userReducer,
      "movies":movieReducer
    }
  });

// Infer the type of createStore
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']