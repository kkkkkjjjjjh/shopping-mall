/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';

const usernav = css`
  position: absolute;
  top: 10px;
  right: 10px;
  a {
    display: inline-block;
    color: #fff;
    padding: 5px 10px;
    font-size: 12px;
    border: 1px solid #fff;
    border-radius: 3px;
    margin-left: 5px;
    &:hover {
      font-weight: bold;
    }
    &:first-of-type {
      margin-left: 0;
    }
    &.login {
      background: #fff;
      color: #318ce6;
    }
  }
`;
function Usernav() {
  return (
    <div css={usernav}>
      <Link to="/login" className="login">
        로그인
      </Link>
      {/* <Link to="">로그아웃</Link> */}
      <Link to="/cart" className="join">
        회원가입
      </Link>
      <Link to="/cart" className="contact">
        고객센터
      </Link>
    </div>
  );
}

export default Usernav;
