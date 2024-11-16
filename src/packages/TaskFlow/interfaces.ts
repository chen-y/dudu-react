
export const ItemTypes = {
  NODE: 'task-flow-noe',
};

export interface Menu {
  key?: string;
  icon?: React.ReactNode;
  label?: React.ReactNode;
  items?: Menu[];
}
