import React from 'react';
import ItemListContainer from './ItemListContainer';

const Category = ({ match }) => {
  const { categoryId } = match.params;

  if (!categoryId) {
    return <div>Error: Categoría no encontrada</div>;
  }

  return (
    <div>
      <h2>Productos de la categoría: {categoryId}</h2>
      <ItemListContainer categoryId={categoryId} />
    </div>
  );
};

export default Category;
