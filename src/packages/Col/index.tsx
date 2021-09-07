import React, { PropsWithChildren, useMemo } from 'react';

import cs from 'classnames';

import './style.scss';

interface ColProps {
  offset?: number;
  pull?: number;
  push?: number;
  span?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

function Col({
  offset,
  pull,
  push,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  span
}: PropsWithChildren<ColProps>) {

  const classes = useMemo<string[]>(() => {
    const list: string[] = [];
    if (span) {
      list.push(`col-${span}`);
    }
    const keys: any = {
      xs,
      sm,
      md,
      lg,
      xl,
      xxl,
      offset
    };

    Object.keys(keys).forEach((key) => {
      if (!!keys[key]) {
        list.push(`col-${key}-${keys[key]}`)
      }
    });
    return list;
  }, [xs, sm, md, lg, xl, xxl, span, offset]);

  return (
    <div className={cs('col', ...classes)}>
      Col
    </div>
  );
}

export default Col;
