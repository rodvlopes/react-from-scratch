import React from 'react'
import PropTypes from 'prop-types'

const data = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
]

export class FilterableProductTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      stockOnly: false,
      criteria: '',
      goods: data
    }
    this.filterGoods = this.filterGoods.bind(this)
  }

  filterGoods ({ stockOnly, criteria }) {
    this.setState((state, props) => {
      criteria = (criteria === undefined ? state.criteria : criteria).toLowerCase()
      stockOnly = stockOnly === undefined ? state.stockOnly : stockOnly
      const goods =
        data
          .filter(it => stockOnly ? it.stocked : true)
          .filter(it => criteria ? it.name.toLowerCase().includes(criteria) : true)
      return {
        goods,
        stockOnly,
        criteria
      }
    })
  }

  render () {
    return (
      <div>
        <SearchGoods onSearch={this.filterGoods}/>
        <GoodsTable goods={this.state.goods} />
      </div>
    )
  }
}

const SearchGoods = ({ stockOnly, criteria, onSearch }) => {
  const handleSearch = (ev) => {
    const value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value
    const change = { [ev.target.name]: value }
    onSearch(change)
  }

  return (
    <React.Fragment>
      <input name="criteria"
        type="text"
        placeholder="Search..."
        value={criteria}
        onChange={handleSearch} />
      <label>
        <input name="stockOnly" type="checkbox" checked={stockOnly} onChange={handleSearch} />
        Only products in stock
      </label>
    </React.Fragment>
  )
}

SearchGoods.propTypes = {
  stockOnly: PropTypes.bool,
  criteria: PropTypes.string,
  onSearch: PropTypes.func
}

const GoodsTable = ({ goods = [] }) => {
  const goodsByCategory = goods.reduce((map, it) => {
    if (map[it.category] === undefined) {
      map[it.category] = []
    }
    map[it.category].push(it)
    return map
  }, {})

  return (
    <table>
      <thead>
        <tr><th>Name</th><th>Price</th></tr>
      </thead>
      <tbody>
        {
          Object.entries(goodsByCategory)
            .map(([catName, catGoods]) =>
              <CategoryRows key={catName} title={catName} goods={catGoods} />
            )
        }
      </tbody>
    </table>
  )
}

GoodsTable.propTypes = {
  goods: PropTypes.array
}

const CategoryRows = ({ title, goods }) => {
  return (
    <React.Fragment>
      <tr><td colSpan="2">{title.toUpperCase()}</td></tr>
      {
        goods.map(({ name, price }, index) => <tr key={index}><td>{name}</td><td>{price}</td></tr>)
      }
    </React.Fragment>
  )
}

CategoryRows.propTypes = {
  title: PropTypes.string,
  goods: PropTypes.array
}
