import React from 'react';

const AddItemButton = ({ product, quantity }) => {
  const handleAddToCart = () => {
    // Lógica para agregar al carrito
  };

  return (
    <button onClick={handleAddToCart}>
      Add to Cart ({quantity})
    </button>
  );
};

export default AddItemButton;
