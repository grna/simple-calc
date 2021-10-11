import React, { useContext } from 'react';
import { CalcContext } from './CalcContext';

const ResultButton = () => {
    const [calc, setCalc] = useContext(CalcContext);

    const onResultClick = (e) => {
        e.preventDefault();
        switch (calc.operator) {
            case '+':
                setCalc({
                    ...calc,
                    displayNum: (calc.firstNum + parseFloat(calc.displayNum)),
                    firstNum: (calc.firstNum + parseFloat(calc.displayNum))
                });
                break;
            case '-':
                setCalc({
                    ...calc,
                    displayNum: (calc.firstNum - parseFloat(calc.displayNum)),
                    firstNum: (calc.firstNum - parseFloat(calc.displayNum))
                });
                break;
            case '*':
                setCalc({
                    ...calc,
                    displayNum: (calc.firstNum * parseFloat(calc.displayNum)),
                    firstNum: (calc.firstNum * parseFloat(calc.displayNum))
                });
                break;
            case '/':
                setCalc({
                    ...calc,
                    displayNum: (calc.firstNum / parseFloat(calc.displayNum)),
                    firstNum: (calc.firstNum / parseFloat(calc.displayNum))
                });
                break;
        }
    }

    return (
        <button onClick={onResultClick}>=</button>
    );
}

export default ResultButton;