import React, { FormEvent, useContext } from 'react';

import context from './context';

export interface NodeProps {
  label: string;
  value: string;
  isLeaf?: boolean;
  icon?: React.ReactNode;
  onCheckedChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

function TreeNode({
  label,
  value,
  icon,
  children,
  // onCheckedChange,
  isLeaf = false,
  ...props
}: React.PropsWithChildren<NodeProps>) {
  const { showChecked, checkedKeys } = useContext(context);

  const onCheckedChange = (evt: React.ChangeEvent<HTMLInputElement>) => {

  };

  return (
    <li>
      <span>
        {icon}
        {showChecked && (
          <input
            type="checkbox"
            value={value}
            checked={checkedKeys.includes(value)}
            onChange={onCheckedChange}
          />
        )}
        {label}
      </span>
      {children}
    </li>
  );
}

export default TreeNode;
