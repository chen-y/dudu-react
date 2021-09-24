import React, { useState } from 'react';

import TreeNode from './TreeNode';

interface GroupProps {
  data: Array<any>;
  checkedKeys?: string[];
}

function NodeGroup({ data = [], checkedKeys = [] }: GroupProps) {

  const onNodeCheck = (evt: React.ChangeEvent<HTMLInputElement>) => {

  };

  return (
    <ul>
      {data.map((d) => (
        <TreeNode
          label={d.label}
          value={d.value}
          key={d.value}
          onCheckedChange={onNodeCheck}
        >
          {d.children && d.children.length > 0 ? (
            <NodeGroup data={d.children} />
          ) : undefined}
        </TreeNode>
      ))}
    </ul>
  );
}

export default NodeGroup;
