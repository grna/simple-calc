import React, { useState } from 'react';
import { CalcProvider } from './CalcContext';
import Calc from './Calc';

export function App() {

  return (
    <div className='container'>
      <h1>Simple Calc</h1>
      <CalcProvider>
        <Calc />
      </CalcProvider>
    </div>
  );
}
