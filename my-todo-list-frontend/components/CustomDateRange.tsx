import React from 'react';
import DateRangePicker from 'rsuite/DateRangePicker';

interface Props {
  handleChange: (newValue: [Date, Date]) => void;
  value: [Date, Date];
  placeholder?: string;
}

const CustomDateRange = (props: Props): JSX.Element => {
  const { handleChange, value, placeholder } = props;
  return (
    <DateRangePicker
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default CustomDateRange;
