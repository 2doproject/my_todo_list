import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  className?: string;
  width?: number | string;
  height?: number | string;
}

const StyledButton = styled.button<Props>`
  width: ${({ width }) => width || '50px'};
  height: ${({ height }) => height || '50px'};
  border-radius: 50%;
  background: #EE7057;
  border: none;

  svg {
    color: #fff;
  }
`;

const Button = ({ children }: Props): JSX.Element => (
  <StyledButton>{children}</StyledButton>
);

export default Button;
