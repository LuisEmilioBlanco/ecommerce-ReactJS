import React, { useState } from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import Description from './Description';
import AddItemButton from './AddItemButton';

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = newQuantity => {
    setQuantity(newQuantity);
  };

  return (
    <div>
      <img src={`/images/${product.id}.png`} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <Description description={product.description} />
      <ItemQuantitySelector
        quantity={quantity}
        onQuantityChange={handleQuantityChange}
      />
      <AddItemButton product={product} quantity={quantity} />
    </div>
  );
};

export default ItemDetail;