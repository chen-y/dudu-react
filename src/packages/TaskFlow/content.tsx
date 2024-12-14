import React from 'react';
import Side, { SideProps } from './side';
import TaskView from './taskView';
import { NodeSource, ConnectionType } from './interfaces';

export interface ContentProps<E extends Record<string, any>> {
  sideProps?: SideProps<E>;
}

export default function Content<E>(props: ContentProps<E>) {
  const { sideProps } = props;
  return (
    <div className='tf-content'>
      <div className='tf-side'><Side {...sideProps} /></div>
      <div className='tf-body'>
        <TaskView />
      </div>
    </div>
  );
}
