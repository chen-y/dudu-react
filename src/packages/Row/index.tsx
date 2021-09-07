import React, { PropsWithChildren } from 'react';

import cs from 'classnames';

import './style.scss';

interface RowProps {
  gutter?: number;
}

function Row({
  gutter,
  ...props
}: PropsWithChildren<RowProps>) {
  return (
    <div className={cs('row')} style={{ gap: gutter }}>
      {props.children}
    </div>
  );
}

export default Row;
