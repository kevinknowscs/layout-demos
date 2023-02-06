import React from 'react';
import { css } from '@emotion/react';

const test = css`
  border: 4px solid blue;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const mainLayout = css`
  color: black;
  border: 1px solid black;
  font-size: 24px;
  // display: flex;
  // flex-direction: column;
  height: 100%;
`;

const headerStyles = css`
  width: 100%;
  background-color: lightblue;
`;

const innerStyles = css`
  display: flex;
  flex-direction: row;
  flex: 1;
  border: 2px solid blue;
`;

const navigationStyles = css`
  background-color: pink;
  max-width: 300px;
`;

const mainStyles = css`
  background-color: green;
  color: white;
  flex: 1;
`;

const sideBarStyles = css`
  background-color: violet;
  max-width: 300px;
`;

const footerStyles = css`
  background-color: orange;
`;

function HolyGrailDemo() {
  return (
    <div css={mainLayout}>
      <div css={headerStyles}>Header</div>
      <div css={innerStyles}>
        <div css={navigationStyles}>Navigation</div>
        <div css={mainStyles}>Main</div>
        <div css={sideBarStyles}>SideBar</div>
      </div>
      <div css={footerStyles}>Footer</div>
    </div>
  );
}

export default HolyGrailDemo;
