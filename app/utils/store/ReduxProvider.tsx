"use client";
import React from "react";
import { Provider } from "react-redux";
// import type {Provider} from "react-redux"
import { store,RootState } from "./appStore";
function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store()} >{children}</Provider>;
}

export default ReduxProvider;