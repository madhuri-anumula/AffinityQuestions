import React from 'react';
import './Product.css';
import bookImg from './books.jpg';


function Product(props) {
    return (
      <div className="product">
         <div className="bookImage">
            <img src={bookImg} alt="Book Image" width="120px" height="120px" />
          </div>
            <h6>{ props.product.name }</h6>
            <button className="button">Add to cart</button>
        
      </div>
    );
  }
export default Product;