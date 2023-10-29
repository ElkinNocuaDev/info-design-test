// TramosCliente.js

import React, { useState } from 'react';
import Datepickerform from './Datepickerform';
import DataTramosCliente from './DataTramosCliente';

const TramosCliente = () => {
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');

  const handleDateChange = (initial, final) => {
    setInitialDate(initial);
    setFinalDate(final);
  };

  return (
    <div>
      <h2>Tramos-Cliente</h2>
      <Datepickerform onDateChange={handleDateChange} />
      <DataTramosCliente initialDate={initialDate} finalDate={finalDate} />
    </div>
  );
};

export default TramosCliente;