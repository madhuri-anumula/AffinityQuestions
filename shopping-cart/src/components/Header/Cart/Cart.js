import React from 'react';


function Cart(props) {
  return(
  <div>
   <div className="cartItem">
            <img src={bookImg} alt="Book Image" width="120px" height="120px" />
          </div>
            <h6>{ props.product.name }</h6>
            <button className="button">Remove</button>
  </div>
  );  
}
export default Cart;