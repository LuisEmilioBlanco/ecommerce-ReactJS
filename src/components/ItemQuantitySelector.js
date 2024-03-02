import React from 'react';

const ItemQuantitySelector = ({ quantity, onQuantityChange }) => {
  const handleQuantityChange = e => {
    const newQuantity = parseInt(e.target.value, 10);
    onQuantityChange(newQuantity);
  };

  return (
    <select value={quantity} onChange={handleQuantityChange}>
      {[...Array(10).keys()].map(num => (
        <option key={num + 1} value={num + 1}>
          {num + 1}
        </option>
      ))}
    </select>
  );
};

export default ItemQuantitySelector;
