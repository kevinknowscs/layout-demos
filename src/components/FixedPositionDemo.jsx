import React from 'react';
import { css } from '@emotion/react';

const elementStyles = css`
  position: fixed;
  top: 100px;
  left: 0px;
  width: calc(100% - 6px);
  border: 3px solid red;
  font-size: 26px;
  color: blue;
  z-index: 10;
  background-color: white;
`;

function FixedPositionDemo() {
  return (
    <div css={elementStyles}>This Is a Fixed Position Element</div>
  );
}

export default FixedPositionDemo;
