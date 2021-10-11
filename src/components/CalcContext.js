import React, { useState, createContext } from 'react';

export const CalcContext = createContext();

export const CalcProvider = (props) => {
    const [calc, setCalc] = useState(
        {
            firstNum: 0,
            displayNum: '',
            operator: '',
            decPoint: false
        }
    )
    return (
        <CalcContext.Provider value={[calc, setCalc]}>
            {props.children}
        </CalcContext.Provider>
    )
}