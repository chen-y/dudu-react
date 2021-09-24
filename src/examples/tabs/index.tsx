import React from 'react';

import Tabs from '../../packages/tabs';
import TabPanel from '../../packages/tabs/TabPanel';

function Example() {
  return (
    <div>
      <Tabs>
        <TabPanel tabKey="a" />
        {null}''ddd
        <TabPanel tabKey="b" />
        ddd
      </Tabs>
    </div>
  );
}

export default Example;

