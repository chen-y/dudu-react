import React from 'react';

import './icon.style.scss';

export type IconTypes =
  | 'lianjieliu'
  | 'shujuji'
  | 'dianhua'
  | 'qq'
  | 'icon'
  | 'yuyin'
  | 'xinxi'
  | 'ai-seat'
  | 'zhibiao07'
  | 'liwu'
  | 'loading';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  type: IconTypes;
}

function Icon(props: IconProps) {
  const { type, ...restProps } = props;

  return <span {...restProps} className={`iconfont icon-${type}`} />;
}

export default Icon;
