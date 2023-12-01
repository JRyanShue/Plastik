import React from 'react';
import Item from './Item'; // Import the Item component
import './ThreeColumnLayout.css';

function ThreeColumnLayout() {
  return (
    <div className="container">
      <div className="column">
        CAD
        <Item content="Purchase CAD" />
        {/* Add more Item components as needed */}
      </div>
      <div className="divider"></div>
      <div className="column">
        Prototyping Services
        <Item content="$70 - Protolabs.com" info="- 2-day delivery, 9.3/10 rating" />
        <Item content="$75 - Xometry.com" info="- 2-day delivery, 9.1/10 rating" />
        <Item content="$32 - Quickparts.com" info="- 4-day delivery, 7.8/10 rating" />
        {/* Add more Item components as needed */}
      </div>
      <div className="divider"></div>
      <div className="column">
        Manufacturing
        <Item content="ICOMold (China)" info="- $, Instant quote, 2-week delivery, 8.2/10 rating" />
        <Item content="Fictiv (USA)" info="- $$$, 1-day quote, 4-week delivery, 9.1/10 rating" />
        <Item content="Protolabs (USA)" info="$$$, 1-day quote, 5-week delivery, 9.0/10 rating" />
        {/* Add more Item components as needed */}
      </div>
    </div>
  );
}

export default ThreeColumnLayout;
