import React, { useState } from 'react';

import cs from 'classnames';

import NodeGroup from './NodeGroup';

import context from './context';

interface TreeProps {
  data?: Array<any>;
  checkedKeys?: Array<string>;
  onCheckedChange?: () => void;
  expandKeys?: Array<string>;
  showCheckbox?: boolean;
}

function Tree({
  data,
  children,
  showCheckbox = false,
  checkedKeys = [],
}: React.PropsWithChildren<TreeProps>) {
  let content: any;
  if (data && data.length > 0) {
    content = <NodeGroup data={data} />;
  } else {
    content = children;
  }

  return (
    <context.Provider
      value={{
        checkedKeys,
        showChecked: showCheckbox,
        data,
      }}
    >
      <div className={cs('tree')}>{content}</div>
    </context.Provider>
  );
}

export default Tree;
