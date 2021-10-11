import React, { useEffect, useContext } from 'react';
import { CalcContext } from './CalcContext';
import ResultButton from './ResultButton';
import OperatorButtons from './OperatorButtons';
import NumberButtons from './NumberButtons';
import DecPointButton from './DecPointButton';
import ClearButton from './ClearButton';

const Calc = () => {
    const [calc, setCalc] = useContext(CalcContext);

    return (
        <form>
            <input
                type='text'
                name='display-num'
                value={calc.displayNum}
                readOnly
            />
            <div className='buttons'>
                <NumberButtons />
                <DecPointButton />
                <OperatorButtons />
                <ResultButton />
                <ClearButton />
            </div>
        </form>
    );
}

export default Calc;