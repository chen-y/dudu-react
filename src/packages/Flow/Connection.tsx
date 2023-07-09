import React, { useMemo, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { getEdgePath } from './utils';

import ConnectionImpl from './ConnectionImpl';

import { getInPortPos, getOutPortPos, opWidth, opHeight } from './Node';

import './connection.style.scss';

interface ConnectionProps {
  // 定义 Edge 组件的 props
  connection: ConnectionImpl;
}

const pathLen = 100;

const Connection: React.FC<ConnectionProps> = (props) => {
  const { connection } = props;

  // const [[ctrlX, ctrlY], setCtrlPoint] = useState([0, 0]);
  // const [[ctrl2X, ctrl2Y], setCtrl2Point] = useState([10, 10]);

  const startIndex = connection.startOpPort.op.outPorts.findIndex(
    (p) => p === connection.startOpPort
  );

  const endIndex = connection.endOpPort.op.inPorts.findIndex(
    (p) => p === connection.endOpPort
  );

  const [startX, startY] = getOutPortPos({
    opX: connection.startOpPort.op.x,
    opY: connection.startOpPort.op.y,
    opH: opHeight,
    opW: opWidth,
    len: connection.startOpPort.op.outPorts.length,
    current: startIndex,
  });

  const [endX, endY] = getInPortPos({
    opX: connection.endOpPort.op.x,
    opY: connection.endOpPort.op.y,
    opH: opHeight,
    opW: opWidth,
    len: connection.endOpPort.op.inPorts.length,
    current: endIndex,
  });

  const d = getEdgePath([startX, startY], [endX, endY]);

  // const d = useMemo(() => {
  //   const [sX, sY] = [startX, startY];
  //   const [eX, eY] = [endX, endY];
  //   // const path = `M${sX},${sY} Q${ctrlX},${ctrlY} ${eX},${eY}`;
  //   // const path = `M${sX},${sY} L${eX},${eY}`;
  //   const path = `M${sX},${sY} C${ctrlX},${ctrlY} ${ctrl2X},${ctrl2Y} ${eX},${eY}`;
  //   console.info(path);
  //   return path;
  // }, [startX, startY, endX, endY, ctrlX, ctrlY, ctrl2X, ctrl2Y]);

  // const onCtrlDown = (evt: React.MouseEvent<SVGRectElement>) => {
  //   const downX = evt.clientX;
  //   const downY = evt.clientY;

  //   const oldX = ctrlX;
  //   const oldY = ctrlY;

  //   const move = (mEvt: MouseEvent) => {
  //     const moveX = mEvt.clientX - downX;
  //     const moveY = mEvt.clientY - downY;

  //     const newX = oldX + moveX;
  //     const newY = oldY + moveY;

  //     console.info(moveX, moveY);

  //     setCtrlPoint([newX, newY]);
  //   };

  //   const up = () => {
  //     document.removeEventListener('mousemove', move);
  //     document.removeEventListener('mouseup', up);
  //   };

  //   document.addEventListener('mousemove', move);

  //   document.addEventListener('mouseup', up);
  // };

  // const onCtrl2Down = (evt: React.MouseEvent<SVGRectElement>) => {
  //   const downX = evt.clientX;
  //   const downY = evt.clientY;

  //   const oldX = ctrl2X;
  //   const oldY = ctrl2Y;

  //   const move = (mEvt: MouseEvent) => {
  //     const moveX = mEvt.clientX - downX;
  //     const moveY = mEvt.clientY - downY;

  //     const newX = oldX + moveX;
  //     const newY = oldY + moveY;

  //     setCtrl2Point([newX, newY]);
  //   };

  //   const up = () => {
  //     document.removeEventListener('mousemove', move);
  //     document.removeEventListener('mouseup', up);
  //   };

  //   document.addEventListener('mousemove', move);

  //   document.addEventListener('mouseup', up);
  // };
  // 在这里实现 Edge 组件的逻辑和 UI
  return (
    <g className="flow-connection">
      <path
        className="flow-connection-edge"
        stroke="#999"
        d={d}
        fill="none"
        strokeWidth={1}
      />
      <path
        className="flow-connection-hot"
        stroke="transparent"
        d={d}
        fill="none"
        strokeWidth={6}
      />

      <path
        className="flow-connection-progress"
        stroke="blue"
        d={d}
        fill="none"
        strokeWidth={2}
        pathLength={pathLen}
        strokeDasharray={`${pathLen} ${pathLen}`}
        strokeDashoffset={pathLen - connection.percent}
        // strokeDashoffset="10%"
      />

      {/* <rect
        x={ctrlX}
        y={ctrlY}
        fill="pink"
        width={10}
        height={10}
        onMouseDown={onCtrlDown}
      />

      <rect
        x={ctrl2X}
        y={ctrl2Y}
        fill="green"
        width={10}
        height={10}
        onMouseDown={onCtrl2Down}
      /> */}
    </g>
  );
};

export default observer(Connection);
