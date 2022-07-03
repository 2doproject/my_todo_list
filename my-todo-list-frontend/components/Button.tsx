import React from 'react';
import { styled, Button } from '@mui/material';

type SIZE = 'small' | 'medium' | 'large';
type VARIANT = 'text' | 'contained' | 'outlined';

interface Props {
  children?: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  size?: SIZE;
  variant?: VARIANT;
}

const StyledButton = styled(Button)((props: Props) => ({
  color: props.variant === 'outlined' ? '#EE7057' : '',
  border: props.variant === 'outlined' ? '1px solid #EE7057' : '',
  '&:hover': {
    border: props.variant === 'outlined' ? '1px solid #EE7057' : '',
    backgroundColor: props.variant === 'outlined' ? '#fdf0ee' : '',
  },
}));

const CustomButton = ({
  children,
  onClick,
  size = 'large',
  variant = 'outlined',
}: Props): JSX.Element => {
  return (
    <StyledButton variant={variant} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
