import React from 'react';
import { css } from '@emotion/react';

const containerStyles = css`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const innerStyles = css`
  height: 100%;
  width: 100%;
  overflow: auto;
`;

function ScrollablePane({ content }) {
  return (
    <div css={containerStyles}>
      <div css={innerStyles}>
        {content}
      </div>
    </div>
  );
}

export default ScrollablePane;
