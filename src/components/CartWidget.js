import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = ({ itemCount }) => {
  return (
    <Link to="/cart"> 
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
    </Link>
  );
};

export default CartWidget;



