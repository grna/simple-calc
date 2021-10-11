import React, { useContext } from 'react';
import { CalcContext } from './CalcContext';

const OperatorButtons = () => {
    const [calc, setCalc] = useContext(CalcContext);

    const onOperatorClick = (e) => {
        e.preventDefault();
        setCalc({
            ...calc,
            firstNum: parseFloat(calc.displayNum),
            operator: e.target.value,
            decPoint: false,
            displayNum: ''
        });
    }

    return (
        <>
            <button value='+' onClick={onOperatorClick}>+</button>
            <button value='-' onClick={onOperatorClick}>-</button>
            <button value='*' onClick={onOperatorClick}>*</button>
            <button value='/' onClick={onOperatorClick}>/</button>
        </>
    );
}

export default OperatorButtons;