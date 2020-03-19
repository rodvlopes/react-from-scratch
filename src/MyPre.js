import React from 'react'
import PropTypes from 'prop-types'

export class MyPre extends React.Component {
  render () {
    return (<pre style={ { backgroundColor: '#eee' } }>
      {this.props.children
        .split(/¬\s*/)
        .filter(s => s)
        .map(s => `  ${s}`)
        .join('\n')}
    </pre>)
  }
}

MyPre.propTypes = {
  children: PropTypes.string
}
