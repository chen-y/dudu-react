import React from 'react';
import Header from './header';
import Content, { ContentProps } from './content';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragPrevew from './dragPreview';

import './style.scss';

interface LayoutProps extends ContentProps {
  height?: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
}

export default function Layout(props: LayoutProps) {
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
