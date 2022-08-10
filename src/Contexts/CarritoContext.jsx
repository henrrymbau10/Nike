// eslint-disable-next-line no-unused-vars
import React, { useState, useContext, createContext } from 'react'

export const CarritoContext = createContext();

// eslint-disable-next-line react/prop-types
export const CarritoContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    return (
        <CarritoContext.Provider value={{ carrito, setCarrito }}>
            {children}
        </CarritoContext.Provider>
    )
}

export const useCarritoContext = () => {
    const context = useContext(CarritoContext);
    if (!context) throw new Error("useCarritoContext must be used whithin a UserContextProvider");
    return context
}