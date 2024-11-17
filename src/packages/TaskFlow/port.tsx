import React, { useRef } from 'react';

export interface PortProps {
  x: number;
  y: number;
}

export default function Port(props: PortProps) {
  const { x, y } = props;
  const animateRef = useRef<SVGAnimateElement>(null);

  const onMouseOver = () => {
    animateRef.current.beginElement();
  };
  const onMouseOut = () => {
    animateRef.current.endElement();
  };

  const cr = 4;
  const borderColor = '#eee';
  const fill = '#f5f5f5';
  return (
    <g className="tf-node-port">
      <title>输入</title>
      <circle cx={x} cy={y} r={cr} stroke={borderColor} fill={fill}></circle>
      <circle
        cx={x}
        cy={y}
        r={cr * 1.5}
        stroke={borderColor}
        fill={fill}
        className="tf-node-port_shape"
        // onMouseOver={onMouseOver}
        // onMouseOut={onMouseOut}
      >
        <title>输入1</title>
        {/* <animate
          attributeName="r"
          from={cr}
          to="8"
          dur={0.4}
          ref={animateRef}
          end="8"
        ></animate> */}
      </circle>
    </g>
  );
}
