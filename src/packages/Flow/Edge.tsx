import React from 'react';

import { getEdgePath } from './utils';

interface EdgeProps {
  // 定义 Edge 组件的 props
  startX?: number;
  startY?: number;
  endX?: number;
  endY?: number;
}

const Edge: React.FC<EdgeProps> = (props) => {
  const { startX = 300, startY = 100, endX = 500, endY = 600 } = props;

  const path = getEdgePath([startX, startY], [endX, endY]);
  // 在这里实现 Edge 组件的逻辑和 UI
  return (
    <g>
      <path stroke="red" d={path} fill="none" strokeWidth={1} />
    </g>
  );
};

export default Edge;
