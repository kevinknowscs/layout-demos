import React from 'react';
import { css } from '@emotion/react';

const containerStyles = css`
  color: black;
`;

function Playground1() {
  return (
    <div css={containerStyles}>
      Playground 1
    </div>
  );
}

export default Playground1;
