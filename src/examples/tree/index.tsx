import React from 'react';

import Tree from '../../packages/tree';

function TreeExamples() {
  return (
    <div>
      <Tree
        showCheckbox
        data={[
          {
            label: 'a1',
            value: 'a1',
            children: [
              {
                label: 'a11',
                value: 'a11',
                children: [
                  {
                    label: 'a111',
                    value: 'a111'
                  }
                ]
              },
              {
                label: 'a12',
                value: 'a12'
              },
              {
                label: 'a13',
                value: 'a13'
              }
            ]
          }
        ]}
      />
    </div>
  );
}

export default TreeExamples;
