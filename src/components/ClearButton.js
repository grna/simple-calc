import React, { useContext } from 'react';
import { CalcContext } from './CalcContext';

const ClearButton = () => {
    const [calc, setCalc] = useContext(CalcContext);

    const onClearButtonClick = (e) => {
        e.preventDefault();

        setCalc({
            displayNum: '',
            firstNum: 0,
            operator: '',
            decPoint: false
        });
    }

    return (
        <>
            <button onClick={onClearButtonClick}>CE</button>
        </>
    );
}

export default ClearButton;