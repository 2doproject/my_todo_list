import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';

interface Props {}

const StyledHeader = styled.header<Props>`
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 15px;

  .logo {
    a {
      text-decoration: none;
      color: inherit;
      margin-right: 50px;
    }
  }

  @media screen and (max-width: 600px) {
    .logo {
      display: none;
    }
  }
`;

const Header = (props: Props): JSX.Element => (
  <StyledHeader>
    <h1 className="logo">
      <a href="/" target="_blank" rel="noopener noreferrer">
        MYTODOLIST
      </a>
    </h1>
    <Nav />
  </StyledHeader>
);

export default Header;
