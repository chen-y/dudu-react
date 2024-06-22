import React, { useState } from 'react';
import { PathProgress } from '../../packages/Progress/path';

export default function ProgressDemo() {
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <div onClick={() => setProgress(10)}>10%</div>
      <div onClick={() => setProgress(20)}>20%</div>
      <div onClick={() => setProgress(30)}>30%</div>
      <div onClick={() => setProgress(50)}>50%</div>
      <div onClick={() => setProgress(75)}>75%</div>
      <PathProgress value={progress} />
    </div>
  );
}
