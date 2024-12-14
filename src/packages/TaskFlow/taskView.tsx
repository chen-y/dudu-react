import  React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes, Menu } from './interfaces';
import { flowContext, TaskFlowContext } from './flowContext';
import Node from './node';

export default function TaskView() {
  const ctx = useContext<TaskFlowContext>(flowContext);
  const [{}, drop] = useDrop<Menu>(() => {
    return {
      accept: ItemTypes.NODE,
      drop(item, monitor) {
        console.info(item)
      },
    }
  });

  const nodeSources = ctx.taskNodes || [];

  return (
    <div className="tf-task-view" ref={drop}>
      {/* <div className="tf-view-size" /> */}
      <div className="tf-view-container">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%">
          <defs>
            <filter id="nodeHoverShadow">
              <feDropShadow dx="1" dy="1" stdDeviation="2"/>
            </filter>
          </defs>
          {nodeSources.map((s) => <Node source={s} key={s.id} />)}
        </svg>
      </div>
    </div>
  );
}