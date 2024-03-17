import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = ({ cartItemCount }) => {
  const categories = ['Barbijos', 'Guantes', 'Compresas', 'Anestesia', 'Agujas'];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#3498db', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
            Sio Odontologia
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categorías
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {categories.map((category, index) => (
                  <Link className="dropdown-item" to={`/category/${category}`} key={index}>
                    {category}
                  </Link>
                ))}
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/catalogo" activeClassName="active">
                Catálogo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/detalle-producto" activeClassName="active">
                Detalle Producto
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Carrito
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Buscar
            </button>
          </form>
          <div className="ml-lg-3">
            <CartWidget itemCount={cartItemCount} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;


