import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { Box } from '@mui/material';
import ko from 'date-fns/locale/ko';
import { startOfWeek } from 'date-fns';

interface Props {
  handleChange?: (newValue: any) => void;
  ranges?: any;
}

const CustomDateRange = (props: Props): JSX.Element => {
  const { handleChange, ranges } = props;
  console.log('props', props);
  return (
    <Box sx={{ display: 'flex' }}>
      <DateRange
        locale={ko}
        months={1}
        date={new Date()}
        ranges={
          ranges || [
            {
              key: 'selection',
              startDate: new Date(),
              endDate: startOfWeek(new Date()),
            },
          ]
        }
        onChange={handleChange}
        editableDateInputs={true}
        rangeColors={['#EE7057']}
        dateDisplayFormat="yyyy/MM/dd"
      />
    </Box>
  );
};

export default CustomDateRange;
