import React, { createContext, useState } from 'react';

export const BreedDataContext = createContext();

export const BreedDataProvider = ({ children }) => {
    const [breedData, setBreedData] = useState(null);

    return (
        <BreedDataContext.Provider value={{ breedData, setBreedData }}>
            {children}
        </BreedDataContext.Provider>
    );
};