import { observable, action } from 'mobx';

import OperatorImpl from './OperatorImpl';

import { shortId } from './utils';

export type PortType = 'in' | 'out';

export class Port {
  @observable op: OperatorImpl;

  id: string;

  type: PortType;

  // x: number;
  // y: number;

  constructor(desc: any, parent: OperatorImpl, id = shortId()) {
    this.op = parent;
    this.id = id;
  }

  // @action
  // setPosition = (x: number, y: number) => {
  //   this.x = x;
  //   this.y = y;
  // };
}

export class InPortImpl extends Port {
  // type = 'in';

  constructor(desc: any, parent: OperatorImpl, id = shortId()) {
    super(desc, parent, id);
    this.type = 'in';
  }
}

export class OutPortImpl extends Port {
  // type = 'out';

  constructor(desc: any, parent: OperatorImpl, id = shortId()) {
    super(desc, parent, id);
    this.type = 'out';
  }
}
