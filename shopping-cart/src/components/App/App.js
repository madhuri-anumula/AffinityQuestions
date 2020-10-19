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

  const handleAddToCart = event => {
    setCartItems(current => [...current,event.currentTarget.value]);
  };

  const productsByCategory = productListData.filter(product => product.category== categoryName)

  return (
    <div>
      <Header cartItems={cartItems} />
      <div class="main">
      
        <CategoryList handleCategoryChange= {handleCategoryChange}/>  
        <ProductList productsByCategory={productsByCategory} handleAddToCart={handleAddToCart} />
      
      </div>
    </div> 
  );
}

export default App;
