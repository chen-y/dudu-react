import React from "react";
import Port from "./port";
import './node.style.scss';
export default function Node() {

  const onMouseDown = (evt: React.MouseEvent) => {
    const { clientX, clientY } = evt;
  }

  const nodeW = 200;
  const nodeH = 40;
  const x = 20;
  const y = 20;
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

        <foreignObject
          x={x}
          y={y}
          width={nodeW}
          height={nodeH}
          stroke="green"
        >
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