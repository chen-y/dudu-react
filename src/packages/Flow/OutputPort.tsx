import React from 'react';

import { OutPortImpl } from './portImpl';

import './port.style.scss';

interface OutPortProps {
  port: OutPortImpl;

  x: number;
  y: number;
}

const r = 4;
const hoverR = 6;
const portFill = '#ccc';

function OutputPort(props: OutPortProps) {
  const { x, y } = props;
  return (
    <g className="port out-port">
      <title>输出端口</title>
      <circle cx={x} cy={y} r={r} fill={portFill} />
      <circle
        className="hover-shape"
        cx={x}
        cy={y}
        r={hoverR}
        fill={portFill}
        strokeWidth={1}
        stroke="green"
      />
    </g>
  );
}

export default OutputPort;
