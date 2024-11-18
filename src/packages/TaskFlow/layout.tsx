import React from 'react';
import Header from './header';
import Content, { ContentProps } from './content';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragPrevew from './dragPreview';
import { ConnectionType } from './interfaces';

import './style.scss';

interface LayoutProps<Node extends any> extends ContentProps {
  height?: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
  connections?: ConnectionType<Node>[];
  onAddNodeInFlow?: (output: Node, input: Node) => void;
  onNodeConnect?: (output: Node, input: Node) => void;
}

export default function Layout<Node extends any>(props: LayoutProps<Node>) {
  const { height, width, ...restProps } = props;
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="task-flow" style={{ height, width }}>
        <Header />
        <Content {...restProps} />
        <DragPrevew />
      </div>
    </DndProvider>
  );
}
