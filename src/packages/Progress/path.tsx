import React, { useRef, useEffect, useState, useMemo } from 'react';

interface PathProgressProps {
  value?: number;
}

export function PathProgress(props: PathProgressProps) {
  const { value = 0 } = props;
  const bgRef = useRef<SVGPathElement>(null);
  const [totalLen, setTotalLen] = useState(0);

  const progress = useMemo(() => {
    if (value < 0) {
      return 0;
    }

    if (value > 100) {
      return 100;
    }

    return value;
  }, [value]);

  useEffect(() => {
    const len = bgRef.current.getTotalLength();
    console.info(len);
    setTotalLen(len);
  }, []);

  console.info(totalLen);

  // return (
  //   <div>
  //     <svg width="200" height="20">
  //       <path
  //         id="progressPath"
  //         fill="none"
  //         stroke="blue"
  //         stroke-width="10"
  //         d="M10,10 L190,10 L190,100"
  //       ></path>
  //     </svg>

  //     <style>
  //       {`#progressPath {
  //       stroke-dasharray: 1000; /* 总路径长度 */
  //       stroke-dashoffset: 100%; /* 初始偏移量，使进度条不可见 */
  //       animation: progress 5s linear forwards; /* 进度条动画，持续5秒 */
  //     }

  //     @keyframes progress {
  //       to {
  //         stroke-dashoffset: 0%; /* 将偏移量设置为0，显示完整进度条 */
  //       }
  //     }`}
  //     </style>
  //   </div>
  // );

  const rate = 1 - progress / 100;

  return (
    <svg width="500" height="500">
      <path
        d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
        stroke="#eee"
        // strokeDasharray={`${value}%, ${100 - value}%`}
        ref={bgRef}
        fill="transparent"
        strokeWidth="10"
      ></path>
      {totalLen && (
        <path
          d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
          stroke="red"
          strokeDasharray={`${totalLen}`}
          strokeDashoffset={totalLen * rate}
          fill="transparent"
          strokeWidth="10"
        >
          <animate
            attributeName="stroke-dashoffset"
            to={totalLen * rate}
            dur="5s"
          ></animate>
        </path>
      )}
    </svg>
  );
}
