import React from 'react';

import ImagePerview from '../../packages/imagePerview';

function Example() {
  return (
    <div>
      <ImagePerview imgs={[{ url: 'https://img1.baidu.com/it/u=244067491,3103095200&fm=15&fmt=auto' }]} />
    </div>
  );
}

export default Example;
