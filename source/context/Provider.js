import React, { createContext, useReducer } from 'react';
import authInitialState from './initialStates/authState';
import contactInitialState from './initialStates/contactState';
import authReducer from './reducers/authReducer';
import contactReducer from './reducers/contactReducer';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(authReducer, authInitialState);
    const [contactState, contactDispatch] = useReducer(contactReducer, contactInitialState);

    return <GlobalContext.Provider value={
        {authState, contactState, authDispatch, contactDispatch}
    }>{children}</GlobalContext.Provider>
};

export default GlobalProvider;