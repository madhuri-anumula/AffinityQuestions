import React from 'react';
import './Product.css';
import bookImg from './books.jpg';


function Product(props) {
    return (
      <div className="product">
          <image src={bookImg} alt="HTML gif Image"  />
          <h3>{ props.product.name }</h3>
        
      </div>
    );
  }
export default Product;