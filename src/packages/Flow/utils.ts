type Point = [number, number];

export function getEdgePath(start: Point, end: Point): string {
  const [sX, sY] = start;
  const [eX, eY] = end;
  const ctrlX = Math.abs(eX - sX) / 2;
  const ctrlY = Math.abs(eY - sY) / 2;
  console.info(ctrlX, ctrlY);
  const path = `M${sX},${sY} Q${ctrlX},${ctrlY} ${eX},${eY} T${eX},${eY}`;
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
