import React from 'react';
import { css } from '@emotion/react';

const containerStyles = css`
  display: flex;
  flex-direction: row;
  height: 500px;
  border: 1px solid black;
  align-items: center;
  /* align-items: stretch; */
`;

const itemStyles = css`
  font-size: 50px;
  text-align: center;
  box-sizing: border-box;
  border: 1px dashed black;
  flex: 1;
`;

const item1Styles = css`
  color: red;
`;

const item2Styles = css`
  color: blue;
`;

function SideBySideDemo() {
  return (
    <div css={containerStyles}>
      <div css={[ itemStyles, item1Styles ]}>
        Item 01
      </div>
      <div css={[ itemStyles, item2Styles ]}>
        Item 02
      </div>
    </div>
  );
}

export default SideBySideDemo;
