import React from 'react';

import './icon.style.scss';

export type IconTypes = 'lianjieliu' | 'shujuji' | 'dianhua' | 'qq' | 'icon' | 'yuyin' | 'xinxi' | 'ai-seat' | 'zhibiao07' | 'liwu';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  type: IconTypes;
}

function Icon(props: IconProps) {
  const { type }  = props;

  return (
    <span className={`iconfont icon-${type}`} />
  );
}

export default Icon;
