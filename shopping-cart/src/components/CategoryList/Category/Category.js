import React from 'react';
import './Category.css';



function Category(props) {

    return (
      <div className="category">
          
          <button value={props.category.name} onClick={props.handleCategoryChange} >{props.category.name}</button>
        
      </div>
    );
  }
export default Category;