import React, {createContext, useState} from 'react';

export const DataContext = createContext();

export const DataProvider= ({ children }) => {
    const [ident, setIdent] = useState(0);

    return (
        <DataContext.Provider value={{
            ident,
            setIdent
        }}>
            {children}
        </DataContext.Provider>
    );
}

