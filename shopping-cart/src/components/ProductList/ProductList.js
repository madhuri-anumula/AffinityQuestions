import React from 'react';
import Product from './Product/Product';
import './ProductList.css';
import productListData from './ProductListData';

function ProductList() {
 const productComponents = productListData.map( item => <Product key={item.id} product={item}/>)
    return (
      <div className="productList">
        
        {productComponents}

      </div>
    );
  }
export default ProductList;