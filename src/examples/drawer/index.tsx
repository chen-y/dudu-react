import Drawer, {
  DrawerTypes,
  DrawerPositions,
} from '../../packages/Drawer/drawer';
import Button from '../../packages/button';

import React, { useState } from 'react';

export default function DrawerDemo() {
  const [normalVisible, setNormalVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [bottomVisible, setBottomVisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setNormalVisible(true)}>drawer 1</Button>
      <Button onClick={() => setCardVisible(true)}>drawer 2</Button>
      <Button onClick={() => setBottomVisible(true)}>drawer 3</Button>

      <Drawer
        title="12345676"
        visible={normalVisible}
        onClose={() => setNormalVisible(false)}
      >
        <div>normal</div>
      </Drawer>

      <Drawer
        title="12345676"
        visible={cardVisible}
        onClose={() => setCardVisible(false)}
        type={DrawerTypes.CARD}
        footer={<div>footer</div>}
      >
        <div>card</div>
      </Drawer>

      <Drawer
        title="12345676"
        visible={bottomVisible}
        onClose={() => setBottomVisible(false)}
        position={DrawerPositions.BOTTOM}
        type={DrawerTypes.CARD}
        onMaskClose={false}
        footer={<div>footer</div>}
      >
        <div>card</div>
      </Drawer>
    </div>
  );
}
