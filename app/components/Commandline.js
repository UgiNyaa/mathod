import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addPoint } from '../actions'

class Commandline extends React.Component {

  static propTypes = {
    onEnter: PropTypes.func.isRequired
  }

  constructor () {
    super()
    this.state = {
      targeted: false
    }
  }

  getStyles () {
    var boxShadow = !this.state.targeted
      ? '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
      : '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'

    return {
      width: '80%',

      padding: 10,

      margin: '0 auto',
      marginBottom: '30px',

      border: 'none',
      borderRadius: 5,

      fontFamily: 'monospace',
      fontSize: 24,

      outline: 'none',

      boxShadow: boxShadow,
      transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
    }
  }

  onChange = (e) => { }

  onFocus = (e) => this.setState({ targeted: true })
  onBlur = (e) => this.setState({ targeted: false })
  onKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.props.onEnter(this.refs.input.value.trim())
      this.refs.input.value = ''
    }
  }

  render () {

    var styles = this.getStyles()

    return (
      <div
        style={{
          height: 'auto',
          textAlign: 'center',
          position: 'absolute',
          bottom: 0,
        }}
      >
        <input
          style={styles}
          type='text'
          ref='input'
          autoFocus

          onChange={this.onChange.bind(this)}
          onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)}
          onKeyUp={this.onKeyUp.bind(this)}
        />
      </div>
    )
  }
}

Commandline = connect()(Commandline)

export default Commandline
