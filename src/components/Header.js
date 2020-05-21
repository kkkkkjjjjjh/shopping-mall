/** @jsx jsx */
import { jsx, css } from '@emotion/core';
/* comonents */
import Logo from './Logo';
import Usernav from './Usernav';
import Nav from './Nav';

const header = css`
  padding: 20px 0;
  background: #318ce6;
`;

function Header() {
  return (
    <div css={header}>
      <Logo />
      <Nav />
      <Usernav />
    </div>
  );
}

export default Header;
