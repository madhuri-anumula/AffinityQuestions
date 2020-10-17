import React from 'react';
import './Product.css';
import bookImg from './books.jpg';


function Product(props) {
    return (
      <div className="product">
          <img src={bookImg} alt="Book Image" width="30px" height="30px"  />
          <h6>{ props.product.name }</h6>
          <button>Add to cart</button>
        
      </div>
    );
  }
export default Product;