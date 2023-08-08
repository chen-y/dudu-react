import React from 'react';

import cs from 'classnames';

interface MenuItemProps extends React.HTMLProps<HTMLLIElement> {
  code: string;
}

const MenuItem: React.FC<React.PropsWithChildren<MenuItemProps>> = (props) => {
  const { className, children, onClick, code, ...restProps } = props;
  const _onClick = (evt: React.MouseEvent<HTMLLIElement>) => {
    onClick?.(evt);
  };
  return (
    <li
      {...restProps}
      onClick={_onClick}
      className={cs('du-menu-item', className)}
    >
      {children}
    </li>
  );
};

MenuItem.displayName = 'DuMenuItem';

export default MenuItem;
