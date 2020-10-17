import React from 'react';
import './CategoryList.css';
import Category from './Category/Category';
import categoryListData from './CategoryListData';

function CategoryList({handleCategoryChange}) {

   const categoryComponents = categoryListData.map(item => <Category key = {item.id}  handleCategoryChange={handleCategoryChange}  category={item} />)
    return (
      <div className="categoryList">
          
          {categoryComponents}       
      </div>
    );
  }
export default CategoryList;