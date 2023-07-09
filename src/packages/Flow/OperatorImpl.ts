import { observable, action, trace, autorun, makeObservable } from 'mobx';

import { OperatorDesc } from './abstract';

import { InPortImpl, OutPortImpl } from './portImpl';
import FlowImpl from './FlowImpl';

import { shortId } from './utils';

class OperatorImpl {
  desc: OperatorDesc;

  id: string;

  flow: FlowImpl;

  @observable loading = false;

  @observable x: number = 0;

  @observable y: number = 0;

  @observable inPorts: InPortImpl[] = [];

  @observable outPorts: OutPortImpl[] = [];

  constructor(desc: OperatorDesc, parent: FlowImpl, id = shortId()) {
    // makeAutoObservable(this);
    makeObservable(this);
    this.desc = desc;

    this.id = id;

    this.flow = parent;
  }

  @action
  setPosition = (x: number, y: number) => {
    // console.info(x, y);
    this.x = x;
    this.y = y;
  };

  @action
  addInPort = (id?: string) => {
    const inPort = new InPortImpl({}, this, id);
    this.inPorts.push(inPort);
  };

  @action
  addOutPort = (id?: string) => {
    const outPorts = new OutPortImpl({}, this, id);
    this.outPorts.push(outPorts);
  };
}

export default OperatorImpl;
