import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const Catalogo = ({ updateCartItemCount }) => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

  const categorias = ['Todos', 'Barbijos', 'Compresas', 'Guantes', 'Otros'];

  const productos = [
    {
      id: 1,
      nombre: 'Barbijo de Alta Protección',
      descripcion: 'Barbijo de tres capas con alta eficiencia de filtrado.',
      precio: 3550.00,
      imagen: 'https://firebasestorage.googleapis.com/v0/b/sio-odontologia.appspot.com/o/Barbijo.jpg?alt=media',
      categoria: 'Barbijos',
    },
    {
      id: 2,
      nombre: 'Compresas Estériles',
      descripcion: 'Compresas estériles de alta absorción para procedimientos médicos.',
      precio: 2250.00,
      imagen: 'https://firebasestorage.googleapis.com/v0/b/sio-odontologia.appspot.com/o/compresas.jpg?alt=media',
      categoria: 'Compresas',
    },
    {
      id: 3,
      nombre: 'Guantes de Nitrilo',
      descripcion: 'Guantes desechables de nitrilo para uso médico.',
      precio: 7750.00,
      imagen: 'https://firebasestorage.googleapis.com/v0/b/sio-odontologia.appspot.com/o/guantes%20nitrilo.jpg?alt=media',
      categoria: 'Guantes',
    },
    {
      id: 4,
      nombre: 'Gafas Protectoras',
      descripcion: 'Gafas de seguridad para protección ocular.',
      precio: 10500.00,
      imagen: 'https://firebasestorage.googleapis.com/v0/b/sio-odontologia.appspot.com/o/gafas-de-proteccion.jpg?alt=media',
      categoria: 'Otros',
    },
    {
      id: 5,
      nombre: 'Vasos Desechables',
      descripcion: 'Vasos desechables para bebidas frías o calientes.',
      precio: 4200.00,
      imagen: 'https://firebasestorage.googleapis.com/v0/b/sio-odontologia.appspot.com/o/vasos-descartables.jpg?alt=media',
      categoria: 'Otros',
    },
    {
      id: 6,
      nombre: 'Jeringa Desechable',
      descripcion: 'Jeringa desechable para aplicaciones médicas.',
      precio: 1000.00,
      imagen: 'https://firebasestorage.googleapis.com/v0/b/sio-odontologia.appspot.com/o/jeringa.webp?alt=media',
      categoria: 'Otros',
    },
    {
      id: 7,
      nombre: 'Algodón Hidrófilo',
      descripcion: 'Algodón hidrófilo para uso odontologico.',
      precio: 1800.00,
      imagen: 'https://firebasestorage.googleapis.com/v0/b/sio-odontologia.appspot.com/o/algodon.jpg?alt=media',
      categoria: 'Otros',
    },
  ];

  const productosPorCategoria = categorias.reduce((acc, categoria) => {
    acc[categoria] = categoria === 'Todos' ?
      productos :
      productos.filter(producto => producto.categoria === categoria || (categoria === 'Otros' && !producto.categoria));
    return acc;
  }, {});

  return (
    <div>
      <h1 style={{ color: '#4CAF50', textAlign: 'center' }}>Catálogo de Productos</h1>

      <div className="text-center mb-4">
        {categorias.map(categoria => (
          <Link
            key={categoria}
            to={`/category/${categoria.toLowerCase()}`}
            className="btn btn-outline-primary mx-1"
            style={{
              backgroundColor: categoriaSeleccionada === categoria ? '#4CAF50' : '#f9f9f9',
              color: categoriaSeleccionada === categoria ? '#fff' : '#333',
              textDecoration: 'none',
            }}
            onClick={() => setCategoriaSeleccionada(categoria)}
          >
            {categoria}
          </Link>
        ))}
      </div>

      <div className="row">
        {productosPorCategoria[categoriaSeleccionada].map((producto) => (
          <div key={producto.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p className="card-text" style={{ color: '#ff5733' }}>Precio: ${producto.precio.toLocaleString()}</p>
                <ItemCount
                  stock={10}
                  initial={1}
                  onAdd={(quantity) => {
                    console.log(`Añadir al carrito: ${quantity} productos`);
                    updateCartItemCount(quantity);
                    setCartItemCount(cartItemCount + quantity);
                  }}
                />
                <div className="text-center mt-3">
                  <Link to={`/detalle-producto/${producto.id}`} className="btn btn-primary" style={{ backgroundColor: '#4CAF50', border: 'none' }}>
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
