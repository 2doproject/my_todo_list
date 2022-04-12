import React from 'react';
import styled from 'styled-components';

interface Props {
  background?: string;
}

const Nav = styled.nav<Props>`
  background: ${({ background }) => background};
`;

const NavWrapper = (): JSX.Element => {
  return (
    <Nav>
      <ul>
        <li>메뉴1</li>
        <li>메뉴2</li>
        <li>메뉴3</li>
      </ul>
    </Nav>
  )
}

export default NavWrapper;
