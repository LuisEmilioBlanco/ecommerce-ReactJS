import React, { useState } from 'react';
import ItemCount from './ItemCount';

const ParentComponent = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleAddToCart = (quantity) => {
    // Actualizar el estado cartItemCount con la cantidad de productos agregados al carrito
    setCartItemCount(quantity);
  };

  return (
    <div>
      <h2>Cantidad de productos en el carrito: {cartItemCount}</h2>
      <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
    </div>
  );
};

export default ParentComponent;
