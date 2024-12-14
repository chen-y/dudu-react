import React, { useContext } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { ItemTypes, NodeSource, Menu } from './interfaces';
import { flowContext, TaskFlowContext } from './flowContext';

export interface DragItemProps {
  item: Menu;
  draggable?: boolean;
}

export default function DragItem(props: DragItemProps) {
  const { item, draggable = true } = props;
  const ctx = useContext<TaskFlowContext>(flowContext);

  const _AddNode = (item: Menu) => {
    const nodeSource: NodeSource<any> = {
      // meta: item,
      source: item,
      meta: item as any,
      id: Math.random().toString(36),
      position: { x: 10, y: 10 },
    };
    ctx?.onAddNodeInFlow?.(nodeSource);
  };
  const [{ isDragging }, drag, preview] = useDrag(() => {
    return {
      type: ItemTypes.NODE,
      item,
      canDrag: () => draggable,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    };
  });

  React.useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);

  return (
    <>
      <div ref={drag} onDoubleClick={() => _AddNode(item)}>
        <span>{item.icon}</span>
        <span>{item.label}</span>
      </div>
    </>
  );
}
