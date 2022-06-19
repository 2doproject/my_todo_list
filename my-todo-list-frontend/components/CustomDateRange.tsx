import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { Box } from '@mui/material';
import { startOfWeek } from 'date-fns';
import ko from 'date-fns/locale/ko';

const CustomDateRange = (): JSX.Element => {
  const [ranges, setRanges] = useState([
    {
      key: 'selection',
      startDate: new Date(),
      endDate: startOfWeek(new Date()),
    },
  ]);

  const onChangeDate = (date: any): void => {
    setRanges([date.selection]);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <DateRange
        locale={ko}
        months={1}
        date={new Date()}
        ranges={ranges}
        onChange={onChangeDate}
        editableDateInputs={true}
        rangeColors={['#EE7057']}
        dateDisplayFormat="yyyy/MM/dd"
      />
    </Box>
  );
};

export default CustomDateRange;
