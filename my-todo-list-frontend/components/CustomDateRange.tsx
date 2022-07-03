import React from 'react';
import DateRangePicker from 'rsuite/DateRangePicker';

interface Props {
  handleChange?: (newValue: [Date, Date] | null) => void;
  value: [Date, Date] | null;
  placeholder?: string;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  readonly?: boolean;
  width?: string;
  handleClose?: () => void;
}

const CustomDateRange = (props: Props): JSX.Element => {
  const {
    size,
    width,
    readonly = false,
    value,
    placeholder,
    handleChange,
    handleClose,
  } = props;

  return (
    <DateRangePicker
      value={value}
      placeholder={placeholder}
      isoWeek={true}
      readOnly={readonly}
      size={size || 'md'}
      hoverRange="week"
      appearance="default"
      placement="autoVertical"
      style={{ width: width || 240 }}
      onChange={handleChange}
      onClose={handleClose}
    />
  );
};

export default CustomDateRange;
