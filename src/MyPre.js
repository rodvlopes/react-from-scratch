import React from 'react'
import PropTypes from 'prop-types'

export class MyPre extends React.Component {
  constructor (props) {
    super(props)
    const content = this.props.children
      .split(/¬\s*/)
      .filter(s => s)
      .map(s => `  ${s}`)
      .join('\n')

    this.state = { content }

    // Sem classProperties é necessário fazer isso.
    this.handleLeftClick = this.handleLeftClick.bind(this)
    this.handleRightClick = this.handleRightClick.bind(this)
  }

  handleLeftClick (ev) {
    ev.preventDefault()
    const content = this.state.content
      .split('\n')
      .map(l => `  ${l}`)
      .join('\n')
    this.setState({ content })
  }

  handleRightClick (ev) {
    ev.preventDefault()
    const content = this.state.content
      .split('\n')
      .map(l => l.replace(/^ {2}/, ''))
      .join('\n') // poderia ser um replace
    this.setState({ content })
  }

  /* // classProperties / babel supported only
  handleClick = () => {
    console.log(this.state.content)
  } */

  render () {
    return (
      <pre onClick={this.handleLeftClick}
        onContextMenu={this.handleRightClick}
        style={ { backgroundColor: '#eee' } }>
        {
          this.props.title &&
          <span style={ { margin: '5px', color: 'darkgreen' } }>
            {'<< ' + this.props.title + ' >>'}
          </span>
        }
        {this.state.content }
      </pre>)
  }
}

MyPre.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string
}
