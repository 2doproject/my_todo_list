import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
  className?: string;
}

const StyledNav = styled.nav<Props>`
  .menu-list {
    list-style: none;
    display: flex;
    gap: 25px;
  }

  #toggle,
  label {
    display: none;
  }

  /* 모바일 버전 */
  @media screen and (max-width: 600px) {
    .menu {
      width: 100%;
      max-height: 0;
      overflow: hidden;
    }
    .menu-list {
      flex-direction: column;
      align-items: center;
    }
    label {
      display: inline-block;
      cursor: pointer;
    }
    #toggle:checked ~ .menu {
      width: 70%;
      min-width: 256px;
      max-width: 360px;
      max-height: 100%;
      min-height: 100%;
      padding: 30px 0px;

      .nav-item {
        text-align: left;
        width: 100%;
      }
    }
  }
`;

const Nav = ({ className }: Props): JSX.Element => (
  <StyledNav className={className}>
    <h2 className="visually-hidden">메뉴</h2>
    <input type="checkbox" name="" id="toggle" />
    <label htmlFor="toggle">
      <MenuIcon />
    </label>
    <div className="menu">
      <ul className="menu-list">
        <li className="nav-item">
          <a href="/home" id="home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/mypage" id="mypage">
            MyPage
          </a>
        </li>
      </ul>
    </div>
  </StyledNav>
);

export default Nav;
