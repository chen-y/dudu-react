import React from 'react';

import Scroll from '../../packages/scroll';

function ScrollExample() {
  return (
    <div>
      <Scroll height={500}>
        {Array.from(new Array(30)).map((item, i) => <h2 key={i}>一句精美无暇的话</h2>)}
      </Scroll>
    </div>
  );
}

export default ScrollExample;
