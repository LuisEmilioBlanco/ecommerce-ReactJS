import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Catalogo from './components/Catalogo';
import DetalleProducto from './components/DetalleProducto';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/detalle-producto/:id" element={<DetalleProducto />} />
            <Route path="/category/:categoryId" element={<Catalogo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const Home = () => <ItemListContainer greeting="Bienvenido a Odontología Sio" />;

export default App;

