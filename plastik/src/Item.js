import React from 'react';
import './Item.css'

function Item({ content, info }) {
  return (
    <div className="item">
      {content}
      <br></br>
        {info}
    </div>
  );
}

export default Item;
