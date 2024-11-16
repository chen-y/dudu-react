import React from 'react';

import { useDragLayer, XYCoord } from 'react-dnd';

function getItemStyles(
  initialOffset: XYCoord | null,
  currentOffset: XYCoord | null
) {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    };
  }

  let { x, y } = currentOffset;

  // if (isSnapToGrid) {
  //   x -= initialOffset.x
  //   y -= initialOffset.y
  //   // ;[x, y] = snapToGrid(x, y)
  //   x += initialOffset.x
  //   y += initialOffset.y
  // }

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

export default function DragPrevew() {
  const { item, isDragging, initialOffset, currentOffset } = useDragLayer(
    (monitor) => {
      return {
        item: monitor.getItem(),
        isDragging: monitor.isDragging(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
      };
    }
  );

  // if (!isDragging) {
  //   return null;
  // }

  return (
    <div className="tf-drag-preview">
      <div style={getItemStyles(initialOffset, currentOffset)}>123132</div>
    </div>
  );
}
