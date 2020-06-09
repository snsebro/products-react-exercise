import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import products from './products.json'
import Header from './components/header/Header'
import ProductList from './components/product-list/ProductList'
import ProductDetail from './components/product-detail/ProductDetail'
import './App.css';


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      products: products,
      searchInput: '',
      product: null
    }
  }

  handleSearchChange = (e) => {
    this.setState({
      searchInput: e.target.value
    })
    console.log(e.target.value)
  }

  setProduct = (name) => {
    this.setState(prevState => ({
      product: prevState.products.filter(el => el.name === name)
    }))
  }


  render() {
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
    )  
    return (
      <div className='layout'>
        <Route path='/'>
          <Header />
        </Route>
          <div className='layout-children'>
        <Route path='/' exact>
          <ProductList products={filteredProducts} handleSearchChange={this.handleSearchChange}/>
        </Route>
        <Route path='/product/:name/'>
          <ProductDetail setProduct={this.setProduct} product={this.state.product}/>
          </Route>
        </div>
      </div>
    )
  }
}

