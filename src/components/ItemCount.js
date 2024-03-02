import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
const [quantity, setQuantity] = useState(initial);

const increaseQuantity = () => {
    if (quantity < stock) {
    setQuantity(quantity + 1);
    }
};

const decreaseQuantity = () => {
    if (quantity > 1) {
    setQuantity(quantity - 1);
    }
};

const addToCart = () => {
    onAdd(quantity);
};

return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ display: 'flex', marginBottom: '10px' }}>
        <button style={{ marginRight: '1px', padding: '5px' }} onClick={decreaseQuantity}>-</button>
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{quantity}</span>
        <button style={{ marginLeft: '5px', padding: '5px' }} onClick={increaseQuantity}>+</button>
    </div>
    <button
style={{ padding: '10px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '5px' }}
onClick={addToCart}
disabled={stock === 0}
>
Agregar al carrito
</button>
    </div>
);
};

export default ItemCount;


