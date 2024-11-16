import React from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { ItemTypes, Menu } from './interfaces';

export interface DragItemProps {
  item: Menu;
  draggable?: boolean;
}

export default function DragItem(props: DragItemProps) {
  const { item, draggable = true } = props;
  const [{ isDragging }, drag, preview] = useDrag(() => {
    return {
      type: ItemTypes.NODE,
      item,
      canDrag: () => draggable,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging()
      }),
    };
  });

  React.useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, []);

  return (
    <>
    <div ref={drag}>
      <span>{item.icon}</span>
      <span>{item.label}</span>
    </div></>
  );
}
