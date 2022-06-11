import React, { useState } from 'react';
import {
  styled,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

interface Props {
  label?: string;
  variant?: 'standard' | 'filled' | 'outlined';
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledCheckBox = styled(Checkbox)({
  '&.Mui-checked': {
    color: '#EE7057',
  },
  '&.Mui-disabled': {
    color: '#EE7057',
  },
});

const CustomCheckbox = ({
  checked,
  disabled,
  onChange,
}: Props): JSX.Element => {
  return (
    <FormControl component="fieldset" variant="standard" margin="dense">
      <FormGroup>
        <FormControlLabel
          control={
            <StyledCheckBox
              name="isDone"
              checked={checked}
              disabled={disabled}
              onChange={onChange}
            />
          }
          label="isDone"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
};

export default CustomCheckbox;
