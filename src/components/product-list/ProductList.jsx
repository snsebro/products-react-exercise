import React from 'react'
import {Link} from 'react-router-dom'
// import products from '../../products.json'

import './ProductList.css'

export default function ProductList(props) {
  return (
    <div className='layout-children'>
      <form className='search-form'>
        <input className="search-input" name="text" placeholder="Search" type="search" onChange={props.handleSearchChange}/>
      </form>
      <form className='sort-container'>
        <label htmlFor="sort">SORT BY:</label>
        <select className="sort">
          <option className="option" value="name-ascending">&nbsp; Alphabetically, A-Z &nbsp;</option>
          <option value="name-descending">&nbsp; Alphabetically, Z-A &nbsp;</option>
          <option value="price-ascending">&nbsp; Price, low to high &nbsp;</option>
          <option value="price-descending">&nbsp; Price, high to low &nbsp;</option>
        </select>
      </form>
      <div className='products'>
        {props.products.map(product =>
          <Link className='product' to={'/product/' + product.name}  key={product.id}>
            <img className='product-image' src={product.imgURL} alt={product.name}></img>
            <div className='product-name'>{product.name}</div>
            <div className='price'>{product.price}</div></Link>)}
      </div>
    </div>
  )
}
