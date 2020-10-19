import React,{useState} from 'react';
import cart from './Cart.png';
import './Cart.css';




function Cart(props) {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleDisplayCart = event => {
    console.log("in togge");
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
  
  const renderCart = () =>{
    if (isCartOpen)
    {
      console.log("in render");
     return <ol className="cartDetails">
        {Object.keys(productQuantity).map(book => (
          <li>{book}: Quantity {productQuantity[book]} <button value={book} >Remove</button></li> 
          
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

  // <div>
  //   <div className="cartItem">
  //             <img src={bookImg} alt="Book Image" width="120px" height="120px" />
  //           </div>
  //             <h6>{ props.productsForCart.name }</h6>
  //             <button className="button" value=  { props.productsForCart.name }  handleItemRemove={handleItemRemove}>Remove</button>
  //   </div>

}

export default Cart;