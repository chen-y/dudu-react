import React from 'react';

import { observer } from 'mobx-react-lite';

import OperatorImpl from './OperatorImpl';

import Icon from '../Icon';

import { opFontSize } from './utils';

export interface ShapeProps {
  op: OperatorImpl;

  width: number;
  height: number;
}

const OperatorShape: React.FC<ShapeProps> = (props) => {
  const { op, width, height } = props;
  const x = op.x;
  const y = op.y;
  const name = op.desc.name;

  const onMouseDown = (evt: React.MouseEvent<SVGGElement>) => {
    const downX = evt.clientX;
    const downY = evt.clientY;

    const oldX = op.x;
    const oldY = op.y;

    const move = (mEvt: MouseEvent) => {
      mEvt.preventDefault();
      const mClientX = mEvt.clientX;
      const mClientY = mEvt.clientY;

      const moveX = mClientX - downX;
      const moveY = mClientY - downY;

      // console.info(moveX, moveY);

      const newX = oldX + moveX;
      const newY = oldY + moveY;

      // console.info(newX, newY);
      op.setPosition(newX, newY);
    };
    const up = () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
    };

    document.addEventListener('mousemove', move);

    document.addEventListener('mouseup', up);
  };
  return (
    <g className="flow-node-shape" onMouseDown={onMouseDown}>
      <title>{name}</title>

      <rect
        className="flow-node-shape-rect"
        x={op.x}
        y={op.y}
        width={width}
        height={height}
        // fill={opFill}
        rx={height / 2 - 2}
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
        width={100}
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
          {/* <Icon type="shujuji" /> */}
          {/* <span> */}
          {op.loading && <Icon type="loading" />}
          {/* </span> */}
        </div>
      </foreignObject>
    </g>
  );
};

export default observer(OperatorShape);
