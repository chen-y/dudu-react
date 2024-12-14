import React, { useState, useMemo, useContext } from 'react';

import { Menu, NodeSource } from './interfaces';


import DragItem from './dragItem';

const defaultSearchFn = (item: Menu, searchStr?: string) => {
  return item.label === searchStr;
};

export interface SideProps<E> {
  menuList?: Menu[];
  menuFilter?: (item: Menu) => boolean;
}

export default function Side<E>(props: SideProps<E>) {
  const { menuList, menuFilter } = props;
  const [searchStr, setSearchStr] = useState<string>('');

  const onSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(evt.target.value);
  };

  const filterFn = menuFilter || defaultSearchFn;

  const _MenuRender = (list: Menu[]) => {
    return (
      <ul className="tf-menu">
        {list?.map((item, idx) => {
          let isFilter = searchStr ? filterFn(item, searchStr) : true;
          if (!isFilter) {
            return null;
          }
          const key = item.key || idx;
          let itemContent = (
            <div className='tf-menu-item_title'>
              {/* {item.icon} {item.label} */}
              <DragItem item={item} />
            </div>
          );
          if (item.items?.length > 0) {
            itemContent = (
              <>
                <div className='tf-menu-item_title'>
                  {/* {item.icon} {item.label} */}
                  <DragItem item={item} draggable={false} />
                </div>
                {_MenuRender(item.items)}
              </>
            );
          }
          return (
            <li className="tf-menu-item" key={key}>
              {itemContent}
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <div className="tf-side-content">
      <div className="menu-filter">
        <input placeholder="查找" value={searchStr} onChange={onSearchChange} />
      </div>
      <div className="tf-menus">{_MenuRender(menuList)}</div>
    </div>
  );
}
