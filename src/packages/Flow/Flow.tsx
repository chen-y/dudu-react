import React, { useMemo } from 'react';

import { observer } from 'mobx-react-lite';

import Header from './Header';
import Side from './Side';
import SideRight from './SideRight';
import Footer from './Footer';
import Content from './Content';

import FlowImpl from './FlowImpl';

import './flow.style.scss';

let i = 0;

export interface FlowProps {
  height?: React.CSSProperties['height'];
  // flow: FlowImpl;
}

function Flow(props: FlowProps) {
  const { height = window.innerHeight } = props;

  const flow = useMemo(() => {
    const f = new FlowImpl();
    f.descToFlow({
      ops: [
        { x: 100, y: 100, id: 'aaa', desc: { type: 'node1', name: '算子1' } },
        { x: 200, y: 200, id: 'ccc', desc: { type: 'node1', name: '算子2' } },
      ],
      // connections: [],
    });
    return f;
  }, []);

  const addOperator = () => {
    // i++;

    // const x = i * 200;
    // const y = i * 200;
    // console.info(x, y);
    // flow.addOpByDesc({ type: 'node2', name: '自定义算子' }, x, y);
    // flow.ops[0].setPosition(20, 20);
    flow.ops[0].addInPort();
  };

  return (
    <div className="flow" style={{ height }}>
      <div className="flow-header" onDoubleClick={addOperator}>
        <Header title="流" />
      </div>
      <div className="flow-body">
        <div className="flow-side-left">
          <Side />
        </div>
        <div className="flow-container">
          <div className="flow-content">
            <Content flow={flow} />
          </div>
          <div className="flow-footer">
            <Footer />
          </div>
        </div>
        <div className="flow-side-right">
          <SideRight />
        </div>
      </div>
    </div>
  );
}

export default observer(Flow);
