import React from 'react';
import { css } from '@emotion/react';

import LoremIpsum from './LoremIpsum';

const headerStyles = css`
  position: fixed;
  top: 0;
  left: 0; 
  height: calc(1rem + 24px);   
  border: 2px solid black;
  width: calc(100% - 4px);
  padding: 10px;
  box-sizing: border-box;
  z-index: 10;
  opacity: 1;
  background-color: white;
`;

const contentStyles = css`
  position: relative;
  top: calc(1rem + 20px);
  left: 0;  
  height: 100%;
  width: 100%;
  overflow: auto;
  z-index: 0;
`;

function HeaderDemo() {
  return (
    <>
      <div css={headerStyles}>
        Here is the Header
      </div>
      <div css={contentStyles}>
        <LoremIpsum />
      </div>
    </>
  );
}

export default HeaderDemo;
