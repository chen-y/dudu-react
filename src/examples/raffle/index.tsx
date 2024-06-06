import React, { useRef, useLayoutEffect } from 'react';

import { Raffle, Scrape } from '../../packages/Raffle';
import Button from '../../packages/button';

export default function RaffleDemo() {
  const instanceRef = useRef(null);
  const data = [
    { rate: 0.1, name: '11' },
    { rate: 0.2, name: '22' },
    { rate: 0.05, name: '33' },
    { rate: 0.1, name: '44' },
    { rate: 0.2, name: '55' },
    { rate: 0.05, name: '666' },
    { rate: 0.2, name: '77' },
    { rate: 0.1, name: '88' },
  ];

  // useLayoutEffect(() => {
  //   instanceRef.current.start();
  // }, []);
  const onStart = () => {
    instanceRef.current.start();
  };

  const onStop = () => {
    instanceRef.current.stop();
    // console.info(instanceRef.current.getSelected());
    const selected = instanceRef.current.getSelected();
    if (selected) {
      alert(`恭喜你获得大奖${selected.name}`);
    }
  };
  return (
    <div>
      <Raffle data={data} ref={instanceRef}></Raffle>
      <Button onClick={onStart}>启动</Button>
      <Button onClick={onStop}>停止</Button>

      <div>
        <Scrape width={200} height={200} />
      </div>
    </div>
  );
}
