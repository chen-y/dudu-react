import React, { PropsWithChildren, useMemo, useContext } from 'react';

import cs from 'classnames';

import context from '../row/context';

import './style.scss';

interface ColProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
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
  className?: string;
  styles?: React.CSSProperties;
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
  span,
  className,
  children,
  ...props
}: PropsWithChildren<ColProps>) {
  const { gutter } = useContext(context);

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

  const styles = useMemo(() => {
    if (gutter) {
      return {
        paddingLeft: `${gutter / 2}px`,
        paddingRight: `${gutter / 2}px`
      };
    } else {
      return {};
    }
  }, [gutter]);

  return (
    <div
      className={cs('col', ...classes, className)}
      {...props}
      style={{ ...props.style, ...styles }}
    >
      {children}
    </div>
  );
}

export default Col;
