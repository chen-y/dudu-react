import React from 'react';
import Header from './header';
import Content, { ContentProps } from './content';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragPrevew from './dragPreview';
import { ConnectionType, NodeSource,  } from './interfaces';
import { flowContext, InjectSource } from './flowContext';

import './style.scss';

interface LayoutProps<Node extends Record<string, any>>
  extends ContentProps<Node>, InjectSource<Node> {
  height?: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
}

export default function Layout<
  Node extends Record<string, any> = Record<string, any>
>(props: LayoutProps<Node>) {
  const { height, width, connections, taskNodes, onAddNodeInFlow, onNodeConnect, ...restProps } = props;
  return (
    <DndProvider backend={HTML5Backend}>
      <flowContext.Provider value={{ connections, taskNodes, onAddNodeInFlow, onNodeConnect }}>
        <div className="task-flow" style={{ height, width }}>
          <Header />
          <Content {...restProps} />
          <DragPrevew />
        </div>
      </flowContext.Provider>
    </DndProvider>
  );
}
