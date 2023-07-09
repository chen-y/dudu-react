import { makeObservable, action } from 'mobx';

import { InPortImpl, OutPortImpl } from './portImpl';

import { shortId } from './utils';

class Connection {
  startOpPort: OutPortImpl = undefined;

  endOpPort: InPortImpl = undefined;

  id: string;

  percent = 0;

  constructor(id = shortId()) {
    makeObservable(this);
    this.id = id;
  }

  @action
  setStartPort = (port: OutPortImpl) => {
    this.startOpPort = port;
  };

  @action
  setEndPort = (port: InPortImpl) => {
    this.endOpPort = port;
  };
}

export default Connection;
