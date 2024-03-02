import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import dataService from '../services/dataService';

const ItemDetailContainer = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Obtener detalles del producto desde el servicio de datos
    const fetchData = async () => {
      const productData = await dataService.getProductById(match.params.id);
      setProduct(productData);
    };

    fetchData();
  }, [match.params.id]);

  return (
    <div>
      {product && <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;