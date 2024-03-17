import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Catalogo from './components/Catalogo';
import DetalleProducto from './components/DetalleProducto';
import CartPage from './components/CartPage';
import HomePage from './components/HomePage'; // Importa el componente HomePage

function App() {
  const [cartItemCount, setCartItemCount] = useState(0);

  // Define la función updateCartItemCount
  const updateCartItemCount = (count) => {
    setCartItemCount(count);
  };

  return (
    <Router>
      <div className="App">
        <NavBar cartItemCount={cartItemCount} />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Ruta para HomePage */}
            <Route path="/catalogo" element={<Catalogo updateCartItemCount={updateCartItemCount} />} />
            <Route path="/detalle-producto/:id" element={<DetalleProducto />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

