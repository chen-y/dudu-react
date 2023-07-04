import React from 'react';

import InputPort from './InputPort';
import OutputPort from './OutputPort';

import Icon from '../Icon';

import './node.style.scss';

export interface OperatorProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  name?: string;
}

const opFill = '#fff';
const opRadius = 10;
const opFontSize = 12;

function Operator(props: OperatorProps) {
  const {
    x = 100,
    y = 100,
    width = 200,
    height = 42,
    name = '数据集算子',
  } = props;

  return (
    <g className="flow-node">
      <g className="flow-node-shape">
        <title>{name}</title>

        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={opFill}
          rx={opRadius}
        />

        <foreignObject x={x} y={y} width={height} height={height}>
          <div
            style={{
              width: height,
              height: height,
              textAlign: 'center',
              lineHeight: `${height}px`,
            }}
          >
            <Icon type="shujuji" />
          </div>
        </foreignObject>

        <text
          fontSize={opFontSize}
          x={x + height}
          y={y + height / 2 + opFontSize / 2}
        >
          {name}
        </text>

        <foreignObject
          x={x + width - height}
          y={y}
          width={height}
          height={height}
        >
          <div
            style={{
              width: height,
              height: height,
              textAlign: 'center',
              lineHeight: `${height}px`,
            }}
          >
            <Icon type="shujuji" />
          </div>
        </foreignObject>
      </g>
      <InputPort />
      <OutputPort />
    </g>
  );
}

export default Operator;
