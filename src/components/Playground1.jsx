import React from 'react';
import { css } from '@emotion/react';
import LoremIpsum from './LoremIpsum';
import SideBySidePane from './SideBySidePane';
import ScrollablePane from './ScrollablePane';

const containerStyles = css`
  color: black;

`;

function Playground1() {
  const left = (
    <ScrollablePane content={<LoremIpsum />} />
  );

  const right = (
    <ScrollablePane content={<LoremIpsum />} />
  );

  return (
    <SideBySidePane left={left} right={right} />
  );
}

export default Playground1;
