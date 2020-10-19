import React,{ ChangeEvent ,useState }  from 'react';
import Header from '../Header/Header';
import CategoryList from '../CategoryList/CategoryList';

import ProductList from '../ProductList/ProductList';
import './App.css';

import productListData from '../ProductList/ProductListData';

function App(props) {

  const [categoryName, setCategoryName] = useState("Fiction");
  const [cartItems, setCartItems] = useState([]);
  

  const handleCategoryChange = event => {
    setCategoryName(event.currentTarget.value);
  };

  
   
  const handleItemRemove = event=>
  {
    //remove
  }

  const handleAddToCart = event => {
    const productsForCart = productListData.filter(product => product.name == event.currentTarget.value)
    setCartItems(current => [...current,productsForCart[0]]);

  };

  const productsByCategory = productListData.filter(product => product.category== categoryName)
  
  return (
    <div>
      <Header cartItems = {cartItems} />
      <div class="main">
      
        <CategoryList handleCategoryChange= {handleCategoryChange}/>  
        <ProductList productsByCategory={productsByCategory} handleAddToCart={handleAddToCart} />
      
      </div>
    </div> 
  );
}

export default App;
