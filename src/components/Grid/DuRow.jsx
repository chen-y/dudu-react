import React, { Component } from 'react'

export class DuRow extends Component {
  render () {
    const {
      type,
      gutter
    } = this.props
    return (
      <div className="du-row">
        {this.props.children}
      </div>
    )
  }
}