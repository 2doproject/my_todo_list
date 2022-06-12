import * as React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';

const CalendarPickerComponent = (): JSX.Element => {
  const [date, setDate] = React.useState<Date | null>(new Date());
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
    </LocalizationProvider>
  );
};

export default CalendarPickerComponent;
