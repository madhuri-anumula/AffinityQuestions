import React,{ ChangeEvent ,useState }  from 'react';
import Header from '../Header/Header';
import CategoryList from '../CategoryList/CategoryList';

import ProductList from '../ProductList/ProductList';
import './App.css';

import productListData from '../ProductList/ProductListData';

function App(props) {

  const [categoryName, setCategoryName] = useState("Fiction");
  const [cartItems, setCartItems] = useState([]);
  const [isCartEmpty,setCartEmpty] = useState(true);

  const handleCategoryChange = event => {
    setCategoryName(event.currentTarget.value);
  };

  
   
  const handleRemoveItem = event=>
  {
    setCartItems(cartItems.filter(item => item.name !== event.currentTarget.value))
    if( cartItems.length > 0)
      setCartEmpty(false);
    else
      setCartEmpty(true);
  }

  const handleAddToCart = event => {
    const productsForCart = productListData.filter(product => product.name == event.currentTarget.value)
    setCartItems(current => [...current,productsForCart[0]])
    setCartEmpty(false);

  };

  const productsByCategory = productListData.filter(product => product.category== categoryName)
  
  return (
    <div>
      <Header cartItems = {cartItems} isCartEmpty={isCartEmpty} handleRemoveItem={handleRemoveItem}/>
      <div class="main">
      
        <CategoryList handleCategoryChange= {handleCategoryChange}/>  
        <ProductList productsByCategory={productsByCategory} handleAddToCart={handleAddToCart} />
      
      </div>
    </div> 
  );
}

export default App;
