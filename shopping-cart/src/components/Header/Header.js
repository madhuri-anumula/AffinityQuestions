import React from 'react';
import './Header.css';
import cart from './Cart.png';
function Header() {
    return (
      <div className="header">
        <h6>Welcome to BookLand!!!</h6>
        <div className="cartUserSection">
          <div className="cart">
            <img src={cart} alt="cart" width="20px" height="20px"></img>
          </div>
          <div class="userName">
            <h6>username</h6>
          </div>
        </div>
      </div>
      
    );
  }
export default Header;