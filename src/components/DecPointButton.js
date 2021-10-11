import React, { useContext } from 'react';
import { CalcContext } from './CalcContext';

const DecPointButton = () => {
    const [calc, setCalc] = useContext(CalcContext);

    const onDecPointButtonClick = (e) => {
        e.preventDefault();

        if (!calc.decPoint) {
            setCalc({
                ...calc,
                displayNum: (calc.displayNum + e.target.value),
                decPoint: true
            });
        }
    }

    return (
        <>
            <button value='.' onClick={onDecPointButtonClick}>,</button>
        </>
    );
}

export default DecPointButton;