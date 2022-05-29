import React from 'react';
import { styled, FormControl, TextField } from '@mui/material';

interface Props {
  id?: string;
  label?: string;
  variant?: 'standard' | 'filled' | 'outlined';
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  },
});

const Input = ({ label, value, onChange }: Props): JSX.Element => {
  return (
    <FormControl fullWidth variant="standard" margin="dense">
      <StyledTextField
        id="custom-css-outlined-input"
        label={label}
        value={value}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default Input;
