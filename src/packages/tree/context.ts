import { createContext } from 'react';

export interface TreeContext {
  checkedKeys: string[];
  setCheckedKeys: (keys: string[]) => void;
  showChecked?: boolean;
  data: Array<any>;
}

const treeContext = createContext<TreeContext>({
  checkedKeys: [],
  data: [],
});

export default treeContext;
