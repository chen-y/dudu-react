type Point = [number, number];

export function getEdgePath(start: Point, end: Point): string {
  const [sX, sY] = start;
  const [eX, eY] = end;
  const halfX = (sX + eX) / 2;
  const ctrlX = halfX - halfX * 0.1;
  const ctrlY = sY - 20;
  console.info(ctrlX, ctrlY);
  const path = `M${sX},${sY} Q${ctrlX},${ctrlY} ${eX},${eY}`;
  // const path = `M 10,10 h 10
  // m  0,10 h 10
  // m  0,10 h 10
  // M 40,20 h 10
  // m  0,10 h 10
  // m  0,10 h 10
  // m  0,10 h 10
  // M 50,50 h 10
  // m-20,10 h 10
  // m-20,10 h 10
  // m-20,10 h 10`;
  console.info(path);
  return path;
}
