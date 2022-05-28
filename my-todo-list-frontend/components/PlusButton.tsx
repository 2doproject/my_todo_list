import React from 'react';
import { styled, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface Props {
  children?: React.ReactNode;
  className?: string;
  width?: number | string;
  height?: number | string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const StyledIconButton = styled(IconButton)({
  '&.MuiButtonBase-root': {
    background: '#ee7057',
      position: 'fixed',
      right: '50px',
      bottom: '50px',

    '& .MuiSvgIcon-root': {
      color: '#fff',
    }
  },
});

const PlusButton = ({ onClick }: Props): JSX.Element => (
  <StyledIconButton aria-label="add" onClick={onClick}>
    <AddIcon fontSize="large" />
  </StyledIconButton>
);

export default PlusButton;
