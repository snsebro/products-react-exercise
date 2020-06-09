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

  stickyHeader = (header) => {

  }

  sortAlphabetically = () => {
    let sortedProducts = products.sort( function( a, b ) {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();
      return console.log(a < b ? -1 : a > b ? 1 : 0)
    });
    
    this.setState({products: sortedProducts})
    
  }


  render() {
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
    )  

    const aZSortedProducts = products.sort( function( a, b ) {
      a = a.price.toLowerCase();
      b = b.price.toLowerCase();
      return a < b ? -1 : a > b ? 1 : 0
    
    });

    const zASortedProducts = products.sort( function( a, b ) {
      a = a.price.toLowerCase();
      b = b.price.toLowerCase();
      return a < b ? 1 : a > b ? -1 : 0
    
    });
    console.log(aZSortedProducts)
    console.log(zASortedProducts)
    console.log(this.state.products)

    return (
      <div className='layout'>
        <Route path='/'>
          <Header />
        </Route>
          <div className='layout-children'>
        <Route path='/' exact>
          <ProductList products={filteredProducts} sortAlphabetically={this.sortAlphabetically} handleSearchChange={this.handleSearchChange}/>
        </Route>
        <Route path='/product/:name/'>
          <ProductDetail setProduct={this.setProduct} product={this.state.product}/>
          </Route>
        </div>
      </div>
    )
  }
}

