import React, {
  useLayoutEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';

import { ArcRaffle, Category } from './arc';

interface RaffleProps {
  width?: number;
  height?: number;
  data?: Category[];
}

const Raffle = forwardRef<ArcRaffle, RaffleProps>(function Raffle(
  props: RaffleProps,
  ref
) {
  const { width = 200, height = 200, data = [] } = props;
  const elRef = useRef<HTMLCanvasElement>(null);
  const instanceRef = useRef<ArcRaffle>();

  useLayoutEffect(() => {
    const instance = new ArcRaffle(elRef.current);
    instance.setData(data);
    instance.draw();
    instanceRef.current = instance;
  }, [data]);

  useImperativeHandle(ref, () => instanceRef.current);
  return (
    <div>
      <canvas ref={elRef} width={width} height={height}></canvas>
    </div>
  );
});

export default Raffle;
