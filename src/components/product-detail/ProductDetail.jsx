import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './ProductDetail.css'

class ProductDetail extends Component {
 
  componentDidMount() {
    this.props.setProduct(this.props.match.params.name)
  }

  render() {
    return (
      this.props.product ?
        <div className='product-detail'>
          <div className='product-left'>
            <img className='product-detail-image' src={this.props.product[0].imgURL} style={{ width: '300px' }} alt={this.props.product[0].name}></img>
          </div>
          <div className='info'>
            <div className='name'>
              {this.props.product[0].name}
            </div>
            <div className='price'>
              {'$' + this.props.product[0].price}
            </div>
            <div className="description">{this.props.product[0].description}</div>
          </div>
      </div>
      : <h1>no data</h1>
    )
  }
}

export default withRouter (ProductDetail)