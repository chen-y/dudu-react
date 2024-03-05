import React from 'react';

import cs from 'classnames';

import MenuItem from './Item';
import SubMenu from './SubMenu';

import './style.scss';

interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {}

const Menu: React.FC<React.PropsWithChildren<MenuProps>> = (props) => {
  const { children, className } = props;
  return (
    <div className={cs('du-menu', className)}>
      <ul>{children}</ul>
    </div>
  );
};

export default Menu;
