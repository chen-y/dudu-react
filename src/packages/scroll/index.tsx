import React, { useState, useLayoutEffect, useRef, useMemo } from 'react';

import cs from 'classnames';

import './style.scss';

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: number | string;
  barWeight?: number | string;
}

function Scroll({
  height = '100%',
  barWeight = 10,
  children,
  ...props
}: React.PropsWithChildren<ScrollProps>) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [actHeight, setActHeight] = useState<number>(0);
  const [bodyHeight, setBodyHeight] = useState<number>(0);
  const [translate, setTranslate] = useState<{
    x: number;
    y: number;
  }>({ y: 0, x: 0 });

  const ratio = useMemo(() => {
    const r = actHeight / bodyHeight;
    return isNaN(r) ? 0 : r;
  }, [actHeight, bodyHeight]);

  useLayoutEffect(() => {
    const { height } = wrapperRef.current.getBoundingClientRect()!;
    const { height: bodyHeight } = bodyRef.current.getBoundingClientRect()!;
    setBodyHeight(bodyHeight);
    setActHeight(height);
  }, []);

  const onMouseWheel = (evt: React.WheelEvent) => {
    let y = translate.y;
    if (evt.deltaY > 0) {
      y += 10;
      if (bodyHeight < y + actHeight) {
        y = bodyHeight - actHeight;
      }
    } else {
      y -= 10;
      if (y < 0) {
        y = 0;
      }
    }
    setTranslate({ ...translate, y });
  };

  const onDragBar = (evt: React.MouseEvent) => {
    let startY = evt.clientY;
    const y = translate.y;

    const move = function (evt: MouseEvent) {
      const endY = evt.clientY;
      const offset = endY - startY;
      setTranslate({ ...translate, y: (y + offset) / ratio });
    };

    document.addEventListener('mousemove', move);

    const up = function () {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
    };
    document.addEventListener('mouseup', up);
  };

  const barStyle = {
    width: barWeight
  };

  return (
    <div
      ref={wrapperRef}
      className={cs('scroll')}
      style={{ ...props.style, height: height }}
      onWheel={onMouseWheel}
    >
      <div
        ref={bodyRef}
        className={cs('scroll-body')}
        style={{ transform: `translate(${translate.x}px, -${translate.y}px)` }}
      >
        {children}
      </div>
      <div className={cs('scroll-bar')} style={barStyle}>
        <div
          className={cs('scroll-bar-btn')}
          onMouseDown={onDragBar}
          style={{
            ...barStyle,
            height: actHeight * ratio,
            transform: `translateY(${translate.y * ratio}px)`
          }}
        ></div>
      </div>
    </div>
  );
}

export default Scroll;
