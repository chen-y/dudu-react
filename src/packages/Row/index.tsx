import React, { PropsWithChildren, useMemo } from 'react';

import cs from 'classnames';

import context from './context';

import './style.scss';

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: number;
}

function Row({
  gutter,
  ...props
}: PropsWithChildren<RowProps>) {
  const style = useMemo(() => {
    if (gutter) {
      return {
        marginLeft: `-${gutter / 2}px`,
        marginRight: `-${gutter / 2}px`
      };
    } else {
      return {};
    }
  }, [gutter]);


  return (
    <context.Provider value={{ gutter }}>
      <div className={cs('row')} style={{...props.style, ...style }}>
        {props.children}
      </div>
    </context.Provider>
  );
}

export default Row;
