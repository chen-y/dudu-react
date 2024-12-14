
import { createContext } from 'react';
import { NodeSource, ConnectionType } from './interfaces';

interface Connecting<E> {
  output?: NodeSource<E>;
  input?: NodeSource<E>;
}

export interface InjectSource<E> {
  taskNodes?: NodeSource<E>[];
  // setTaskNodes?: (nodes: NodeSource<E>) => void;

  connections?: ConnectionType<E>[];
  // setConnections?: (cs: Connection[]) => void;
  onAddNodeInFlow?: (node: NodeSource<E>) => void;
  onNodeConnect?: (output: NodeSource<E>, input: NodeSource<E>) => void;
}

export interface TaskFlowContext<E extends Record<string, any> = Record<string, any>> extends InjectSource<E> {
  // checkedEls: 
  connecting?: Connecting<E>;
  setConnecting?: (c: Connecting<E>) => void;

}

export const flowContext = createContext<TaskFlowContext>(null);
