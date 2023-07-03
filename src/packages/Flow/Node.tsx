import React from 'react';

import InputPort from './InputPort';
import OutputPort from './OutputPort';

function Node() {
  return (
    <g className="flow-node">
      <InputPort />
      <OutputPort />
      <g className="flow-node-shape"></g>
    </g>
  );
}

export default Node;
