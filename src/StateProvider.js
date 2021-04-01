import React, { createContext, useContext, useReducer } from "react";

// prepares the data layer 
export const StateContext = createContext();

// Wraps the app and provides the data layer ... allows every component to access the data layer. 
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
); 

//allows you to pull information from the layer 
export const useStateValue = () => useContext(StateContext);
