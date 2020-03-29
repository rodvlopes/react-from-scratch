/* eslint "react/prop-types" : 0 */
/* eslint no-return-assign : 0 */
import React from 'react'
import './global.styl'

// jQuery e $ estão sendo injetados pelo webpack
import 'chosen-js'
import 'chosen-js/chosen.min.css'

/* Chosen ecapsula o contato com a parte não controlada pelo React */
class Chosen extends React.Component {
  componentDidMount () {
    this.$el = $(this.el)
    this.$el.chosen()

    this.handleChange = this.handleChange.bind(this)
    this.$el.on('change', this.handleChange)
  }

  componentDidUpdate (prevProps) {
    if (prevProps.children !== this.props.children) {
      this.$el.trigger('chosen:updated')
    }
  }

  componentWillUnmount () {
    this.$el.off('change', this.handleChange)
    this.$el.chosen('destroy')
  }

  handleChange (e) {
    this.props.onChange(e.target.value)
  }

  render () {
    return (
      <div>
        <select className="Chosen-select" ref={el => this.el = el}>
          {this.props.children}
        </select>
      </div>
    )
  }
}

export default class Hello extends React.Component {
  constructor (props) {
    super(props)

    this.state = { valorEscolhido: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (val) {
    this.setState({ valorEscolhido: val })
  }

  render () {
    return (
      <>
        <p>{this.state.valorEscolhido}</p>
        <Chosen onChange={this.handleChange}>
          <option>vanilla</option>
          <option>chocolate</option>
          <option>strawberry</option>
        </Chosen>
      </>
    )
  }
}
