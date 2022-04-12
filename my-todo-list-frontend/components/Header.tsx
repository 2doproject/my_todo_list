import React from 'react';
import styled from 'styled-components';

interface Props {
  background?: string;
}

const Header = styled.header<Props>`
  background: ${({ background }) => background};
`;

const HeaderWrapper = (): JSX.Element => {
  return (
    <Header>
      헤더
    </Header>
  )
}

export default HeaderWrapper;
