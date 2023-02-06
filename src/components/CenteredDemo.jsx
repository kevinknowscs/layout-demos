import React from 'react';
import { css } from '@emotion/react';

const containerStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const itemStyles = css`
  border: 1px solid black;
  font-size: 50px;
`;

function CenteredDemo() {
  return (
    <div css={containerStyles}>
      <div css={itemStyles}>Hello World</div>
    </div>
  );
}

export default CenteredDemo;
