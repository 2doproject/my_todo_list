import React from 'react';
import { styled, Button } from '@mui/material';

interface Props {
  children?: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const StyledButton = styled(Button)({
  color: '#EE7057',
  border: '1px solid #EE7057',
  '&:hover': {
    border: '1px solid #EE7057',
    backgroundColor: '#fdf0ee',
  },
});

const CustomButton = ({ children, onClick }: Props): JSX.Element => {
  return (
    <StyledButton variant="outlined" size="large" onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
