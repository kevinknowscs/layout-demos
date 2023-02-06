import React from 'react';
import { css } from '@emotion/react';

const containerStyles = css`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;

const innerStyles = css`
  flex: 1;
`;

function SideBySidePane({ left, right }) {
  return (
    <div css={containerStyles}>
      <div css={innerStyles}>
        {left}
      </div>
      <div css={innerStyles}>
        {right}
      </div>      
    </div>
  );
}

export default SideBySidePane;
