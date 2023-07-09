import { makeObservable, observable, action } from 'mobx';

import { Port } from './portImpl';

class Connecting {
  @observable start: Port = undefined;

  @observable endX: number = undefined;
  @observable endY: number = undefined;

  constructor() {
    makeObservable(this);
  }

  @action
  setStart = (s: Port) => {
    this.start = s;
  };

  @action
  setEndPosition = (x: number, y: number) => {
    this.endX = x;
    this.endY = y;
  };
}

export default Connecting;
