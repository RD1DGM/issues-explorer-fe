import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducers";

export const store = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
  );
};
