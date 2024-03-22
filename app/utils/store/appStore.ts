import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./slices/userSlice"
export const store = () => configureStore({
    reducer: {
      userReducer:userReducer
    }
  });

// Infer the type of createStore
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']