import React, { useState } from 'react';
import TaskFlow from '../../packages/TaskFlow';

export default function TaskFlowDemo() {
  const [nodes, setNodes] = useState([
    { position: { x: 100, y: 100 }, meta: {}, id: '123', source: '' },
  ]);
  const sideProps = {
    menuList: [
      {
        icon: '1',
        label: '算子1',
        items: [
          {
            icon: '1',
            label: '算子1',
          },
          {
            icon: '1',
            label: '算子2',
            items: [
              {
                icon: '1',
                label: '算子1',
              },
              {
                icon: '1',
                label: '算子1',
              },
              {
                icon: '1',
                label: '算子1',
              },
              {
                icon: '1',
                label: '算子1',
              },
            ],
          },
          {
            icon: '1',
            label: '算子1',
          },
          {
            icon: '1',
            label: '算子1',
          },
        ],
      },
      {
        icon: '2',
        label: '算子1',
      },
      {
        icon: '3',
        label: '算子1',
      },
      {
        icon: '4',
        label: '算子1',
      },
      {
        icon: '5',
        label: '算子1',
      },
      {
        icon: '6',
        label: '算子1',
      },
    ],
  };
  return (
    <TaskFlow
      height="100vh"
      sideProps={sideProps}
      taskNodes={nodes}
      onAddNodeInFlow={(node) => {
        setNodes((ns: any[]) => [...ns, node])
      }}
    />
  );
}
