/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const logoTitle = css`
  display: block;
  font-size: 40px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
`;

function logo() {
  return (
    <div>
      <h1 css={logoTitle}>로고</h1>
    </div>
  );
}

export default logo;
