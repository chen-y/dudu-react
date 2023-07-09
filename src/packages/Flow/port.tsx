import React, { useMemo } from 'react';

import { observer } from 'mobx-react-lite';

import cs from 'classnames';

import { InPortImpl, OutPortImpl, Port } from './portImpl';

import Connecting from './ConnectingImpl';
import ConnectionImpl from './ConnectionImpl';

import './port.style.scss';

interface InPortProps {
  port: InPortImpl;

  x: number;
  y: number;
}

const r = 4;
const hoverR = 6;
const portFill = '#ccc';

function InPort(props: InPortProps) {
  const { port, x, y } = props;

  const computedCanLink = (p?: Port) => {
    if (!p) return false;
    const isSameOp = p.op === port.op;
    if (p.type !== port.type && !isSameOp) {
      return true;
    }

    return false;
  };

  const isConnecting = useMemo(() => {
    return !!port.op.flow.connecting;
  }, [port.op.flow.connecting]);

  const hasConnect = useMemo(() => {
    return computedCanLink(port.op.flow.connecting?.start);
  }, [port.op.flow.connecting?.start]);

  const onMouseDown = (evt: React.MouseEvent<SVGGElement>) => {
    const downX = evt.clientX;
    const downY = evt.clientY;
    const portWrapperRef = evt.target;

    let connecting: Connecting;

    const { left: rootLeft, top: rootTop } =
      port.op.flow._root.getBoundingClientRect();

    const move = (mEvt: MouseEvent) => {
      mEvt.preventDefault();
      const moveX = mEvt.clientX;
      const moveY = mEvt.clientY;

      const endX = moveX - rootLeft;
      const endY = moveY - rootTop;

      if (!connecting) {
        connecting = new Connecting();
        port.op.flow.setConnecting(connecting);
        connecting.setStart(port);
      } else {
        connecting.setEndPosition(endX, endY);
      }
    };

    const up = () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
      port.op.flow.deleteConnecting();
    };

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  };

  const portUp = () => {
    console.info('port up');
    const connecting = port.op.flow.connecting;
    if (!connecting) return;
    const isCanLink = computedCanLink(connecting.start);
    if (isCanLink) {
      const connection = new ConnectionImpl();
      let startPort: OutPortImpl;
      let endPort: InPortImpl;
      if (port instanceof InPortImpl) {
        endPort = port;
        startPort = connecting.start;
      }
      if (port instanceof OutPortImpl) {
        startPort = port;
        endPort = connecting.start;
      }

      connection.setStartPort(startPort);
      connection.setEndPort(endPort);
      port.op.flow.addConnection(connection);
    }
  };

  return (
    <g
      className={cs('port in-port', {
        'disabled-link': isConnecting && !hasConnect,
        'allow-link': isConnecting && hasConnect,
      })}
      onMouseDown={onMouseDown}
      onMouseUp={portUp}
    >
      <title>输入端口</title>
      <circle cx={x} cy={y} r={r} fill={portFill} />
      <circle cx={x} cy={y} r={r} className="allow-link-tip" />
      <circle cx={x} cy={y} r={r} className="disabled-link-tip" />
      <circle
        className="hover-shape"
        cx={x}
        cy={y}
        r={hoverR}
        fill={portFill}
        strokeWidth={1}
        stroke="green"
      />
    </g>
  );
}

export default observer(InPort);
