import React from 'react';

import cs from 'classnames';

interface SubMenuProps {}

const SubMenu: React.FC<SubMenuProps> = () => {
  return <li className={cs('du-sub-menu')}>SubMenu</li>;
};

SubMenu.displayName = 'DuSubMenu';

export default SubMenu;
