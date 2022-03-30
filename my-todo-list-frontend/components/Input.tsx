import React from 'react';
import { TextField } from '@mui/material';

interface Props {
  id?: string;
  label?: string;
  variant?: 'standard' | 'filled' | 'outlined';
}

const Input = ({ id, label, variant }: Props): JSX.Element => {
  return <TextField id={id} label={label} variant={variant}></TextField>;
};

export default Input;
