import React from 'react';

import Button from '../../packages/button';

function Example() {
  return (
    <div>
      <Button>按钮</Button>
      <hr />
      <div>
        <Button type="primary">按钮</Button>
        <Button type="warning">按钮</Button>
        <Button type="error">按钮</Button>
        <Button type="success">按钮</Button>
        <Button type="info">按钮</Button>
      </div>
      <hr />
      <div>
        <Button size="xs">按钮</Button>
        <Button size="small">按钮</Button>
        <Button size="middle">按钮</Button>
        <Button size="large">按钮</Button>
      </div>
      <hr />
      <div>
        <Button type="primary" ghost>按钮</Button>
        <Button type="warning" ghost>按钮</Button>
        <Button type="error" ghost>按钮</Button>
        <Button type="success" ghost>按钮</Button>
        <Button type="info" ghost>按钮</Button>
      </div>
      <hr />
      <div>
        <Button size="xs" round>A</Button>
        <Button size="small" round>B</Button>
        <Button size="middle" round>C</Button>
        <Button size="large" round>D</Button>
      </div>
      <hr />
      <div>
        <Button type="primary" disabled>按钮</Button>
        <Button type="warning" disabled>按钮</Button>
        <Button type="error" disabled>按钮</Button>
        <Button type="success" disabled>按钮</Button>
        <Button type="info" disabled>按钮</Button>
      </div>
      <hr />
      <div>
        <Button type="primary" d3>按钮</Button>
        <Button type="warning" d3>按钮</Button>
        <Button type="error" d3>按钮</Button>
        <Button type="success" d3>按钮</Button>
        <Button type="info" d3>按钮</Button>
      </div>
    </div>
  );
}

export default Example;
