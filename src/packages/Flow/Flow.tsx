import React from 'react';

import Header from './Header';
import Side from './Side';
import SideRight from './SideRight';
import Footer from './Footer';
import Content from './Content';

import './flow.style.scss';

export interface FlowProps {
  height?: React.CSSProperties['height'];
}

function Flow(props: FlowProps) {
  const { height = window.innerHeight } = props;

  return <div className="flow" style={{ height }}>
    <div className="flow-header">
      <Header title="流" />
    </div>
    <div className="flow-body">
      <div className="flow-side-left">
        <Side />
      </div>
      <div className="flow-container">
        <div className="flow-content"><Content /></div>
        <div className="flow-footer"><Footer /></div>
      </div>
      <div className="flow-side-right">
        <SideRight />
      </div>
    </div>
  </div>
}

export default Flow;