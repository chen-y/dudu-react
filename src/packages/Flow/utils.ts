type Point = [number, number];

export function getEdgePath(start: Point, end: Point): string {
  const [sX, sY] = start;
  const [eX, eY] = end;
  const path = `M${sX},${sY} L${eX},${eY}`;
  return path;
}
