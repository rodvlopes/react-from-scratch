import React from 'react'
import './global.styl'

class MyForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { nome: '', texto: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.refFile = React.createRef()
  }

  handleSubmit (ev) {
    ev.preventDefault()
    console.log(this.state.nome)
    console.log('>>', this.state.texto)
    console.log('file (nao controlado)', this.refFile.current.value)
  }

  handleChange (ev) {
    ev.preventDefault()
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className={this.constructor.name}>
        <p>Este formulário tem o seu estado controlado pelo React.</p>
        <label>Nome:
          <input name="nome" type="text" value={this.state.nome} onChange={this.handleChange} />
        </label>
        <label>Texto:
          <textarea name="texto" value={this.state.texto} onChange={this.handleChange}></textarea>
        </label>
        <label>Arquivo (não controlado):
          <input name="idade" type="file" ref={this.refFile} />
        </label>
      </form>
    )
  }
}

export default MyForm
