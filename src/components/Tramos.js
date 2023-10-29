// Tramos.js
import React, { useState } from 'react';
import Datepickerform from './Datepickerform';
import Datatramo from './Datatramo';

const Tramos = () => {
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');

  const handleDateChange = (initial, final) => {
    setInitialDate(initial);
    setFinalDate(final);
  };

  return (
    <div>
      <h2>Tramos</h2>
      <Datepickerform onDateChange={handleDateChange} />
      <Datatramo initialDate={initialDate} finalDate={finalDate} />
    </div>
  );
};

export default Tramos;
