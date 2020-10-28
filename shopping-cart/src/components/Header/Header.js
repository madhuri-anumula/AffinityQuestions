import React from 'react';
import './Header.css';
import Cart from './Cart/Cart';




function Header({cartItems,handleRemoveItem,isCartEmpty}) {
    return (
      <div className="header">
        <h6>Welcome to BookLand!!!</h6>
        <div className="cartUserSection">
          <Cart items={cartItems} isCartEmpty = {isCartEmpty} handleRemoveItem= {handleRemoveItem}></Cart>
          <div class="userName">
            <h6>username</h6>
          </div>
        </div>
      </div>
      
    );
  }
export default Header;