import React from 'react';

import Menu, { MenuItem, SubMenu } from '../../packages/Menu';

function MenuDemo() {
  return (
    <div>
      <div>
        <Menu>
          <MenuItem onClick={() => alert()} code="a">
            123
          </MenuItem>
          <SubMenu>
            <MenuItem code="sub child">sub child</MenuItem>
          </SubMenu>
        </Menu>
      </div>
    </div>
  );
}

export default MenuDemo;
