import React, {Component} from 'react'
// import PropTypes from 'prop-types'

export default class DuCol extends Component {
  render () {
    const {
      xs,
      sm,
      md,
      lg,
      span
    } = this.props
    return (
      <div className="du-col">
        {this.props.children}
      </div>
    )
  }
}

// DuCol.propTypes = {
//   xs: PropTypes.number,
//   sm: PropTypes.number,
//   md: PropTypes.number,
//   lg: PropTypes.number,
//   span: PropTypes.number
// }