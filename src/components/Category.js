import React from 'react';
import ItemListContainer from './ItemListContainer';

const Category = ({ params }) => {
if (!params) {
return <div>Error: Categoría no encontrada</div>;
}

const { categoryId } = params;

return (
    <div>
    <h2>Productos de la categoría: {categoryId}</h2>
    <ItemListContainer greeting={`Productos de la categoría: ${categoryId}`} />
    </div>
);
};

export default Category;