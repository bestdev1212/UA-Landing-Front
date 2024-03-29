import React, { createContext, useState, useContext } from 'react';

interface AppState {
    jwtToken: string;
}

const defaultState: AppState = {
    jwtToken: ''
};

type ContextType<TValue> = [TValue, (newValue: TValue) => void];

const defaultContextValue: ContextType<AppState> = [defaultState, () => {}];

export const AppContext = createContext(defaultContextValue);

export const AppContextProvider: React.FC = ({ children, ...props }) => {
    const [contextState, setContextState] = useState<AppState>(defaultState);

    const ctxValue: ContextType<AppState> = [
        contextState,
        (value: AppState) => {
            setContextState(value);
        }
    ];

    return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
