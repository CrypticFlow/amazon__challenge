import React, { createContext, useContext, useReducer } from 'react'; 

// prepares the data layer
export const StateContext = createContext(); 

// wraps our app entirely within the data layer for every componnent 
export const StateProvider = ( { reducer, initialState, children } ) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}> 
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext); 