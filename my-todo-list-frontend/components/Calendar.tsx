import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const Calendar = (): JSX.Element => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default Calendar;