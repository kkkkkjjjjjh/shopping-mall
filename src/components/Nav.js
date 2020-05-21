/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';
/* icon */
import { GoHome } from 'react-icons/go';

const link = css`
  display: inline-block;
  color: #fff;
  padding: 0 20px;
  font-size: 20px;
  .icHome {
    margin-right: 5px;
    vertical-align: middle;
    margin-top: -5px;
    &:hover {
      color: #beddfb;
      transition: 0.3s;
    }
  }
  &:hover {
    color: #beddfb;
    transition: 0.3s;
  }
`;

function Nav() {
  return (
    <div>
      <Link to="/" css={link}>
        <GoHome size="24" color="#fff" className="icHome" />홈
      </Link>
      <Link to="/sub01" css={link}>
        신상품
      </Link>
      <Link to="/sub02" css={link}>
        베스트
      </Link>
      <Link to="/sub03" css={link}>
        이벤트
      </Link>
    </div>
  );
}

export default Nav;
