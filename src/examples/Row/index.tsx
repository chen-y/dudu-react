import React from 'react';

import cs from 'classnames';

import Row from '../../packages/row';
import Col from '../../packages/col';

import './style.scss';

function Example() {
  return (
    <div>
      <Row>
        <Col span={5} offset={5} className="example-col-1">col</Col>
      </Row>
      <hr />
      <Row>
        <Col span={4}>
          <div className="example-col-1">span 4</div>
        </Col>
        <Col span={4}>
          <div className="example-col-1">span 4</div>
        </Col>
        <Col span={4}>
          <div className="example-col-1">span 4</div>
        </Col>
        <Col span={4}>
          <div className="example-col-1">span 4</div>
        </Col>
        <Col span={4}>
          <div className="example-col-1">span 4</div>
        </Col>
        <Col span={4}>
          <div className="example-col-1">span 4</div>
        </Col>
      </Row>
      <hr />
      <Row gutter={20}>
        <Col span={4}>
          <div className="example-col-1">span 4</div>
        </Col>
        <Col span={4}>
          <div className="example-col-1">span 4</div>
        </Col>
        <Col span={4}>
          <div className="example-col-1">span 4</div>
        </Col>
        <Col span={4}>
          <div className="example-col-1">span 4</div>
        </Col>
        <Col span={4}>
          <div className="example-col-1">span 4</div>
        </Col>
        <Col span={4}>
          <div className="example-col-1">span 4</div>
        </Col>
      </Row>
    </div>
  );
}

export default Example;
