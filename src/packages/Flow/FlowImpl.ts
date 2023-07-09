import { makeAutoObservable, action } from 'mobx';

import OperatorImpl from './OperatorImpl';

import ConnectionImpl from './ConnectionImpl';

import { FlowDesc, OperatorDesc } from './abstract';

import { Port } from './portImpl';

import ConnectingImpl from './ConnectingImpl';

class FlowImpl {
  _root: SVGSVGElement;

  ops: OperatorImpl[] = [];

  connections: ConnectionImpl[] = [];

  connecting: ConnectingImpl = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  addOperator = (op: OperatorImpl) => {
    this.ops.push(op);
  };

  @action
  addOpByDesc = (desc: OperatorDesc, x: number, y: number) => {
    const op = new OperatorImpl(desc, this);
    op.setPosition(x, y);
    this.ops.push(op);
  };

  @action
  setConnecting = (c: ConnectingImpl) => {
    this.connecting = c;
  };

  @action
  deleteConnecting = () => {
    this.connecting = undefined;
  };

  @action
  addConnection = (c: ConnectionImpl) => {
    this.connections.push(c);
  };

  @action
  descToFlow = (desc: FlowDesc) => {
    const { ops: opsDesc = [] } = desc || {};

    // const connections = [];

    const ops = opsDesc.map((opDesc) => {
      const operatorDesc: OperatorDesc = opDesc.desc;
      const op = new OperatorImpl(operatorDesc, this, opDesc.id);
      op.setPosition(opDesc.x, opDesc.y);

      op.addInPort();

      op.addOutPort();
      op.addOutPort();

      return op;
    });

    const c = new ConnectionImpl();
    c.setStartPort(ops[0].outPorts[0]);
    c.setEndPort(ops[1].inPorts[0]);
    const connections = [c];

    console.info(connections);

    this.ops = ops;
    this.connections = connections;
  };
}

export default FlowImpl;
