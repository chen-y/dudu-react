type Point = [number, number];

export function getEdgePath(start: Point, end: Point): string {
  const [sX, sY] = start;
  const [eX, eY] = end;
  // const halfX = (sX + eX) / 2;
  const ctrlX = sX;
  let offset = 50;
  // const distance = Math.abs(sY - eY);
  // const scale = distance * 0.25;
  // const offset = scale > 70 ? 70 : scale;
  const ctrlY = sY + offset;
  const ctrl2X = eX;
  const ctrl2Y = eY - offset;
  // const path = `M${sX},${sY} Q${ctrlX},${ctrlY} ${eX},${eY}`;
  // const path = `M${sX},${sY} L${eX},${eY}`;
  const path = `M${sX},${sY} C${ctrlX},${ctrlY} ${ctrl2X},${ctrl2Y} ${eX},${eY}`;
  return path;
}

export function shortId(len = 8) {
  const id = Math.random()
    .toString(36)
    .substring(2, 2 + len);
  return id;
}

export const opFontSize = 12;
