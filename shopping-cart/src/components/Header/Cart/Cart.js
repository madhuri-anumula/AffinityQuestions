import React,{useState} from 'react';
import cart from './Cart.png';
import './Cart.css';
import bookImg from './books.jpg';



function Cart(props) {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleDisplayCart = event => {
    setIsCartOpen(!isCartOpen);
  }

  const productQuantity = props.items.reduce((acc, value) => {
    if (!acc[value.name]) {
      acc[value.name] = 1;
    } else {
      acc[value.name]++;
    }
   
    return acc;
  }, {});

  const handleDisplayLastCart = (event) => { 
    
    props.handleRemoveItem(event);
    
    if (Object.keys(productQuantity).length== 1)   
    {
       setIsCartOpen(!isCartOpen);
    }
  }

  const renderCart = () =>{
    if (isCartOpen && !props.isCartEmpty) 
    {
     return <ol className="cartDetails">
        {Object.keys(productQuantity).map(book => (
          <li> <div className="bookImage">
          <img src={bookImg} alt="Book Image" width="30px" height="30px" />
        </div> {book}: Quantity {productQuantity[book]} <button value={book} onClick={handleDisplayLastCart}>Remove</button></li> 
          
        ))}
      </ol>  
    }
  };

 return(
      <div className="cart">
        <div className="cartSummary">
         <button> <img src={cart} alt="cart" width="20px" height="20px" onClick={handleDisplayCart}></img></button>
          <div className="itemCount">{props.items.length}</div>
        </div>
   
    
       {renderCart()}

      </div>
  );

  

}

export default Cart;