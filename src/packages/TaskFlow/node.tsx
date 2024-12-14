import React, { useContext, useState, useEffect } from 'react';
import Port from './port';
import { TaskFlowContext, flowContext } from './flowContext';
import { Coord, NodeSource } from './interfaces';
import './node.style.scss';

export interface NodeProps<E> {
  width?: number;
  height?: number;
  title?: React.ReactNode;
  icon?: React.ReactNode;
  showPort?: boolean;
  borderColor?: string;
  bgColor?: string;
  source: NodeSource<E>;
}
export default function Node<E>(props: NodeProps<E>) {
  const { source } = props;
  // const ctx = useContext<TaskFlowContext>(flowContext);
  const [{x, y}, setCoord] = useState<Coord>({ x: 0, y: 0 });
  const onMouseDown = (evt: React.MouseEvent) => {
    evt.preventDefault();
    evt.stopPropagation();
    const { clientX, clientY } = evt;
    const startX = x;
    const startY = y;
    const mouseMove = (mEvt: MouseEvent) => {
      const moveX = mEvt.clientX - clientX;
      const moveY = mEvt.clientY - clientY;
      const newCoords: Coord = { x: startX + moveX, y: startY + moveY };
      setCoord(newCoords);
      if (source.position) {
        source.position = {...newCoords};
      }
    };

    const mouseUp = () => {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseup', mouseUp);
    };

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
  };

  useEffect(() => {
    if (source.position) {
      setCoord({ x: source.position?.x ?? 0, y: source.position?.y ?? 0 });
    }
  }, [source]);

  const nodeW = 200;
  const nodeH = 40;
  // const x = 20;
  // const y = 20;
  const strokeColor = '#eee';
  const fill = '#fff';
  const title = '超长文本超长文本超长文本超长文本';
  const fontSize = 14;

  const iconSize = nodeH;

  return (
    <g className="tf-node">
      <g onMouseDown={onMouseDown}>
        <title className="tf-node-title">{title}</title>
        <rect
          className="tf-node-shape"
          x={x}
          y={y}
          width={nodeW}
          height={nodeH}
          rx={nodeH / 2}
          fill={fill}
          stroke={strokeColor}
        ></rect>
        {/* <text
          x={x + iconSize}
          y={y + nodeH / 2 + fontSize / 2 / 2}
          fontSize={fontSize}
          style={{ overflow: 'hidden' }}
        >
          {title}
        </text> */}

        <foreignObject x={x} y={y} width={nodeW} height={nodeH} stroke="green">
          <div className="tf-node-body">
            <div className="tf-node-icon"></div>
            <div className="tf-node-name">{title}</div>
            <div className="tf-node-desc"></div>
          </div>
        </foreignObject>
      </g>

      <Port x={x + nodeW / 2} y={y} />

      <Port x={x + nodeW / 2} y={y + nodeH} />
    </g>
  );
}
