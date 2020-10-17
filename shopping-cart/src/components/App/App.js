import React from 'react';
import Header from '../Header/Header';
import CategoryList from '../CategoryList/CategoryList';
import ProductList from '../ProductList/ProductList';
import './App.css';
import productListData from '../ProductList/ProductListData';

function App() {
  return (
    <div>
      <Header />
      <div class="rowC">
        
        <CategoryList />  
        <ProductList />
      
      </div>
    </div> 
  );
}

export default App;
