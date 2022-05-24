import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  className?: string;
  width?: number | string;
  height?: number | string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const StyledButton = styled.button<Props>`
  width: ${({ width }) => width || '50px'};
  height: ${({ height }) => height || '50px'};
  border-radius: 50%;
  background: #ee7057;
  border: none;

  svg {
    color: #fff;
  }
`;

const Button = ({ children, onClick }: Props): JSX.Element => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;
