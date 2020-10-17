import React from 'react';
import './CategoryList.css';
import Category from './Category/Category';
import categoryListData from './CategoryListData';

function CategoryList() {

   const categoryComponents = categoryListData.map(item => <Category key = {item.id} category={item} />)
    return (
      <div className="categoryList">
          
          {categoryComponents}       
      </div>
    );
  }
export default CategoryList;