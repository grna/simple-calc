import React, { useContext } from 'react';
import { CalcContext } from './CalcContext';
import utils from '../utils';

const NumberButtons = () => {
    const [calc, setCalc] = useContext(CalcContext);

    const onNumberButtonClick = (e) => {
        e.preventDefault();
        setCalc({
            ...calc,
            displayNum: (calc.displayNum + e.target.value)
        });
    }

    return (
        <>
            {utils.range(1, 9).map(buttonNum =>
                <button
                    key={buttonNum}
                    value={buttonNum}
                    onClick={onNumberButtonClick}
                >
                    {buttonNum}
                </button>
            )}
            <button value='0' onClick={onNumberButtonClick}>0</button>
        </>
    );
}

export default NumberButtons;