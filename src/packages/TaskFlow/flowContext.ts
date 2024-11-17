
import { createContext } from 'react';

export interface Connection {}

export interface TaskFlowContext {
  // checkedEls: 
  connection?: Connection;
}

const context = createContext(null);
