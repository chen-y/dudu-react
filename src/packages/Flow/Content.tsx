import React from 'react';

import { observer } from 'mobx-react-lite';

import Operator from './Node';

import Edge from './Connection';

import FlowImpl from './FlowImpl';

import Connecting from './Connecting';

import './content.style.scss';

interface ContentProps {
  // Props定义
  flow: FlowImpl;
}

const Content: React.FC<ContentProps> = (props) => {
  const { flow } = props;
  // 组件实现
  return (
    <div className="flow-canvas">
      {/* 组件内容 */}
      <svg
        className="flow-root-svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        // viewBox="0 0"
        width="100%"
        height="100%"
        ref={(root) => {
          flow._root = root;
        }}
      >
        <defs>
          <filter id="node-shadow">
            <feDropShadow></feDropShadow>
          </filter>

          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" />
          </marker>
        </defs>
        {/* <Edge /> */}
        {/* <Operator /> */}
        {flow.connections.map((edge) => {
          return <Edge connection={edge} key={edge.id} />;
        })}
        {flow.ops.map((op) => {
          return <Operator op={op} key={op.id} />;
        })}

        {!!flow.connecting && <Connecting connecting={flow.connecting} />}
      </svg>
    </div>
  );
};

export default observer(Content);
