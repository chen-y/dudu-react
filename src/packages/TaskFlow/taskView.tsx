import  React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes, Menu } from './interfaces';

export default function TaskView() {
  const [{}, drop] = useDrop<Menu>(() => {
    return {
      accept: ItemTypes.NODE,
      drop(item, monitor) {
        console.info(item)
      },
    }
  });

  return (
    <div className="tf-task-view" ref={drop}>
      {/* <div className="tf-view-size" /> */}
      <div className="tf-view-container">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%"></svg>
      </div>
    </div>
  );
}