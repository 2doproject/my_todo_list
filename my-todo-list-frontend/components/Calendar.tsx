import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

interface Props {
  handleChange: (newValue: any) => void;
  value?: Date;
}

const Calendar = (props: Props): JSX.Element => {
  const { handleChange, value } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="날짜 선택"
        inputFormat="yyyy/MM/dd"
        mask="____/__/__"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
