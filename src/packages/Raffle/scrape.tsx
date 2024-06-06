import React, { useMemo, useRef, useLayoutEffect } from 'react';

import ScrapeDraw from './scrapeDraw';

import './scrape.style.scss';

interface ScrapeProps {
  width?: number;
  height?: number;
}

const Scrape = React.forwardRef<{}, ScrapeProps>((props, ref) => {
  const { width = 0, height = 0 } = props;

  const cvsRef = useRef<HTMLCanvasElement>(null);
  const instanceRef = useRef<ScrapeDraw>();

  React.useImperativeHandle(ref, () => ({}));

  useLayoutEffect(() => {
    const instance = new ScrapeDraw(cvsRef.current);
    instanceRef.current = instance;
    instance.draw();
  }, []);

  const bounsStyle = {
    width,
    height,
  };
  return (
    <div className="scrape-wrapper">
      <div className="scrape-cvs-wrapper">
        <canvas
          className="scrape-cvs"
          ref={cvsRef}
          width={width}
          height={height}
        ></canvas>
      </div>
      <div className="scrape-bonus" style={bounsStyle}>
        <span className="scrape-bonus-text">一等奖</span>
      </div>
    </div>
  );
});

export default Scrape;
