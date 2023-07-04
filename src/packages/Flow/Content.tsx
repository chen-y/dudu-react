import React from 'react';

import Operator from './Node';

import Edge from './Edge';

import './content.style.scss';

interface ContentProps {
  // Props定义
}

const Content: React.FC<ContentProps> = (props) => {
  // 组件实现
  return (
    <div className="flow-canvas">
      {/* 组件内容 */}
      <svg
        className="flow-root-svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0"
      >
        <Edge />
        <Operator />
      </svg>
    </div>
  );
};

export default Content;
