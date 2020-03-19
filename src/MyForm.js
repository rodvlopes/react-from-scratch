import React from 'react'
import './global.styl'

class MyForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { nome: '', texto: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNomeChange = this.handleNomeChange.bind(this)
    this.handleTextoChange = this.handleTextoChange.bind(this)
  }

  handleSubmit (ev) {
    ev.preventDefault()
    console.log(this.state.nome)
    console.log('>>', this.state.texto)
  }

  handleNomeChange (ev) {
    ev.preventDefault()
    this.setState({ nome: ev.target.value })
  }

  handleTextoChange (ev) {
    ev.preventDefault()
    this.setState({ texto: ev.target.value })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className={this.constructor.name}>
        <p>Este formulário tem o seu estado controlado pelo React.</p>
        <label>Nome: </label>
        <input type="text" value={this.state.nome} onChange={this.handleNomeChange} />
        <label>Texto: </label>
        <textarea value={this.state.texto} onChange={this.handleTextoChange}></textarea>
      </form>
    )
  }
}

export default MyForm
