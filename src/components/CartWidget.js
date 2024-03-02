import React from 'react';

const CartWidget = () => {
  const itemCount = 5; // Puedes ajustar este número según tus necesidades

  return (
    <div className="cart-widget" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
      <span
        className="cart-icon"
        role="img"
        aria-label="Cart"
        style={{ fontSize: '24px', marginRight: '8px' }}
      >
        🛒
      </span>
      <span
        className="item-count"
        style={{
          backgroundColor: '#3498db',
          color: 'white',
          borderRadius: '50%',
          padding: '6px 10px',
        }}
      >
        {itemCount}
      </span>
    </div>
  );
};

export default CartWidget;

