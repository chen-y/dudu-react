
export const ItemTypes = {
  NODE: 'task-flow-noe',
};

export interface Menu {
  key?: string;
  icon?: React.ReactNode;
  label?: React.ReactNode;
  items?: Menu[];
}

export interface ConnectionType<T extends Record<string, any>> {
  output: T;
  input: T;
}

export interface Coord {
  x: number;
  y: number;
}

export interface NodeSource<E> {
  meta: E;
  position: Coord;
  id: string;
  source: string | Menu;
  // key?: string;
  // icon?: React.ReactNode;
  // label?: React.ReactNode;
}