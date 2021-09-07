import React from 'react';

import cs from 'classnames';

import Row from '../../packages/Row';
import Col from '../../packages/Col';

import './style.scss';

function Example() {
  return (
    <div>
      <Row>
        <Col span={5} offset={5}></Col>
      </Row>
    </div>
  );
}

export default Example;
