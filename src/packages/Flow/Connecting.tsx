import React, { useMemo } from 'react';

import { observer } from 'mobx-react-lite';

import ConnectingImpl from './ConnectingImpl';

import { InPortImpl, OutPortImpl } from './portImpl';

import { getInPortPos, getOutPortPos, opHeight, opWidth } from './Node';

interface ConnectingProps {
  connecting: ConnectingImpl;
}

const Connecting: React.FC<ConnectingProps> = (props) => {
  const { connecting } = props;
  const [startX, startY] = useMemo(() => {
    let start: number[] = [];
    if (connecting.start instanceof InPortImpl) {
      const pIndex = connecting.start.op.inPorts.findIndex(
        (p) => p === connecting.start
      );
      start = getInPortPos({
        opX: connecting.start.op.x,
        opY: connecting.start.op.y,
        opH: opHeight,
        opW: opWidth,
        len: connecting.start.op.inPorts.length,
        current: pIndex,
      });
    } else if (connecting.start instanceof OutPortImpl) {
      const pIndex = connecting.start.op.outPorts.findIndex(
        (p) => p === connecting.start
      );
      start = getOutPortPos({
        opX: connecting.start.op.x,
        opY: connecting.start.op.y,
        opH: opHeight,
        opW: opWidth,
        len: connecting.start.op.outPorts.length,
        current: pIndex,
      });
    }
    return start;
  }, [connecting.start]);

  const hasX2 = connecting?.endX ?? false;
  const hasY2 = connecting?.endY ?? false;

  return (
    <g>
      {/* <path /> */}
      <line
        x1={startX}
        y1={startY}
        x2={hasX2 ? connecting?.endX - 1 : undefined}
        y2={hasY2 ? connecting?.endY - 1 : undefined}
        stroke="black"
        markerEnd="url(#arrow)"
      ></line>
    </g>
  );
};

export default observer(Connecting);
