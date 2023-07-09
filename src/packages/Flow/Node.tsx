import React from 'react';

import { observer } from 'mobx-react-lite';

import Port from './port';
// import OutputPort from './OutputPort';

import OperatorImpl from './OperatorImpl';

import OperatorShape from './OperatorShape';

import './node.style.scss';

export const opWidth = 200;
export const opHeight = 42;

interface GetPortPosArgs {
  opX: number;
  opY: number;
  opW: number;
  opH: number;
  len: number;
  current: number;
}

export const getInPortPos = (req: GetPortPosArgs) => {
  const { opX, opY, opW, len, current } = req;
  const parts = len + 1;
  const partW = opW / parts;
  const pX = opX + (current + 1) * partW;
  const pY = opY;
  return [pX, pY];
};

export const getOutPortPos = (req: GetPortPosArgs) => {
  const { opX, opY, opW, opH, len, current } = req;
  const parts = len + 1;
  const partW = opW / parts;
  const pX = opX + (current + 1) * partW;
  const pY = opY + opH;
  return [pX, pY];
};

export interface OperatorProps {
  op: OperatorImpl;

  height?: number;
  width?: number;
}

function Operator(props: OperatorProps) {
  const { op } = props;

  return (
    <g className="flow-node">
      <OperatorShape op={op} width={opWidth} height={opHeight} />

      {op.inPorts.map((inPort, i) => {
        const portPos = getInPortPos({
          opX: inPort.op.x,
          opY: inPort.op.y,
          opH: opHeight,
          opW: opWidth,
          current: i,
          len: op.inPorts.length,
        });
        return (
          <Port port={inPort} key={inPort.id} x={portPos[0]} y={portPos[1]} />
        );
      })}

      {op.outPorts.map((outPort, i) => {
        const [pX, pY] = getOutPortPos({
          opX: outPort.op.x,
          opY: outPort.op.y,
          opH: opHeight,
          opW: opWidth,
          current: i,
          len: op.outPorts.length,
        });
        return <Port port={outPort} key={outPort.id} x={pX} y={pY} />;
      })}
    </g>
  );
}

export default observer(Operator);
