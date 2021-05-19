import React, { createContext, useState, useContext } from 'react';

// Crear un contexto.
const CounterContext = createContext(null);

// Crear el provider y la función retorna el componente provicer del context
const  CounterProvider = (props) => {
    // Lógica de como va a funcionar mi contexto
    
    const [counter, SetCounter] = useState(0);

    const value = {
        counter,
        SetCounter,
    }
    // Provider el value para funcionar
    // value: Son los datos o funciones globales y accesibles.
    
    return <CounterContext.Provider value={value} {...props} />
}

// Consumidor del contexto
// Quien quiera utilizar el estado del contexto tiene que ejecutar esta función
const useCounterContext = () => {
    const context = useContext(CounterContext);
    return context;
};

export  {
    CounterProvider,
    useCounterContext,
}