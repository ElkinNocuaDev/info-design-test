// Cliente.js
import React, { useState } from 'react';
import Datepickerform from './Datepickerform';
import Clientetramo from './Clientetramo';

const Cliente = () => {
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');

  const handleDateChange = (initial, final) => {
    setInitialDate(initial);
    setFinalDate(final);
  };

  return (
    <div>
      <h2>Cliente</h2>
      <Datepickerform onDateChange={handleDateChange} />
      <Clientetramo initialDate={initialDate} finalDate={finalDate} />
    </div>
  );
};

export default Cliente;
