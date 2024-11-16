import React from 'react';
import Side, { SideProps } from './side';
import TaskView from './taskView';

export interface ContentProps {
  sideProps?: SideProps;
}

export default function Content(props: ContentProps) {
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
