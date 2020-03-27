import React from 'react'
import PropTypes from 'prop-types'
import './global.styl'

export default function Hello () {
  const data = [
    { name: 'abóbora', valor: 10 },
    { name: 'laranja', valor: 5 },
    { name: 'maça', valor: 1 }, {
      name:
     'pitanga',
      valor: 7
    }]
  return (
    <MyErrorBoundary>
      <BuggyComponent />
      <h3>ItensList</h3>
      <ItensList data={data}/>
      <h3>ItensList Com Contador (HOC)</h3>
      <ItensListWithCounter data={data} />
    </MyErrorBoundary>
  )
}

class MyErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { error: false }
  }

  static getDerivedStateFromError (error) {
    console.log('inside derived', error)
    return { error: true }
  }

  componentDidCatch (error, errorInfo) {
    console.log('Erro caputrado:', error)
    console.log('Erro Info:', errorInfo)
  }

  render () {
    if (this.state.error) {
      return <h3>Ocorreu um erro. Salve-se quem puder!</h3>
    } else {
      return this.props.children
    }
  }
}

MyErrorBoundary.propTypes = {
  children: PropTypes.array
}

class BuggyComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = { counter: 0, timer: null }
  }

  componentDidMount () {
    const timer = setInterval(() =>
      this.setState((state) => {
        return { counter: state.counter + 1 }
      }),
    1001000
    )
    this.setState({ timer })
  }

  componenteDidUnmount () {
    clearInterval(this.state.timer)
  }

  render () {
    if (this.state.counter > 5) {
      throw Error('Im a buggy component!')
    }
    return (
      <p>Número de infectados pelo novo Corona Vírus: {this.state.counter}</p>
    )
  }
}

function ItensList (props) {
  return (
    <ul className={props.className}>
      {props.data.map(it => <li key={it.name}>{it.name},  {it.valor}</li>)}
    </ul>
  )
}
ItensList.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string
}

function addCounter (WrappedComponent) {
  const ComponentWithCounter = (props) => {
    const total = props.data.reduce((acc, { valor }) => acc + valor, 0)
    console.log('total', total)
    const newData = [].concat(props.data)
    newData.push({ name: 'total', valor: total })

    return (
      <WrappedComponent className="com-total" data={newData} />
    )
  }

  ComponentWithCounter.propTypes = WrappedComponent.propTypes

  return ComponentWithCounter
}

const ItensListWithCounter = addCounter(ItensList)
