import React from 'react';
import { styled, FormControl, TextField } from '@mui/material';

interface Props {
  id?: string;
  label?: string;
  variant?: 'standard' | 'filled' | 'outlined';
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readonly?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#EE7057',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#EE7057',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#EE7057',
    },
    '&.Mui-disabled': {
      color: 'inherit',
    },
    '& .Mui-disabled': {
      '-webkit-text-fill-color': 'inherit'
    }
  },
});

const Input = ({ label, value, onChange, readonly = false, disabled = false, placeholder }: Props): JSX.Element => {
  return (
    <FormControl fullWidth variant="standard" margin="dense">
      <StyledTextField
        id="custom-css-outlined-input"
        label={label}
        value={value}
        disabled={disabled}
        onChange={onChange}
        InputProps={{
          readOnly: readonly,
        }}
        placeholder={placeholder}
      />
    </FormControl>
  );
};

export default Input;
