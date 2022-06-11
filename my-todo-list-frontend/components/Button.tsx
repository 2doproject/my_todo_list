import React from 'react';
import { styled, Button } from '@mui/material';

type SIZE = 'small' | 'medium' | 'large'

interface Props {
  children?: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  size?: SIZE
}

const StyledButton = styled(Button)({
  color: '#EE7057',
  border: '1px solid #EE7057',
  '&:hover': {
    border: '1px solid #EE7057',
    backgroundColor: '#fdf0ee',
  },
});


const CustomButton = ({ children, onClick, size = 'large' }: Props): JSX.Element => {
  return (
    <StyledButton variant="outlined" size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
