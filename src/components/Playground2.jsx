import React from 'react';
import { css } from '@emotion/react';

import ScrollablePane from './ScrollablePane';
import LoremIpsum from './LoremIpsum';
import FixedPositionDemo from './FixedPositionDemo';

const containerStyles = css`
  color: black;
`;

function Playground2() {
  const innerContent = (
    <>
      <LoremIpsum />
      <LoremIpsum />
    </>
  )
  return (
    <>
      {/* <FixedPositionDemo /> */}
      <ScrollablePane content={innerContent} />
    </>
  );
}

export default Playground2;
