import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { Box } from '@mui/material';
import ko from 'date-fns/locale/ko';
import { startOfWeek } from 'date-fns';

interface Props {
  handleChange?: (newValue?: any) => void;
  ranges?: Array<{ key: string; startDate: Date; endDate: Date }>;
}

const CustomDateRange = (props: Props): JSX.Element => {
  const { handleChange, ranges } = props;

  return (
    <Box sx={{ display: 'flex' }}>
      <DateRange
        locale={ko}
        months={1}
        date={new Date()}
        ranges={ranges}
        onChange={handleChange}
        editableDateInputs={true}
        rangeColors={['#EE7057']}
        dateDisplayFormat="yyyy/MM/dd"
      />
    </Box>
  );
};

export default CustomDateRange;
