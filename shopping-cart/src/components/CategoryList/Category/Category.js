import React from 'react';
import './Category.css';


function Category(props) {
    return (
      <div className="category">
          
          <button >{    props.category.name}</button>
        
      </div>
    );
  }
export default Category;