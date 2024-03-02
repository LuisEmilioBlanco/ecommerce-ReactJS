import React from 'react';

const ItemListContainer = ({ greeting }) => {
return (
    <div className="container mt-4">
    <div className="row">
        <div className="col-12 text-center">
        <h2 style={{ color: '#4CAF50' }}>{greeting}</h2>
        </div>
    </div>
    </div>
);
};

export default ItemListContainer;