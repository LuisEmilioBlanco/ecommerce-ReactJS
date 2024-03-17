import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="welcome-section text-center bg-primary text-white p-5">
            <h1 className="display-4">Bienvenidos a Sio Odontología</h1>
            <p className="lead">Descubre una amplia gama de productos odontológicos de alta calidad.</p>
            <Link to="/catalogo" className="btn btn-light btn-lg">Ver Catálogo</Link>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="offers-section bg-warning text-dark p-4">
            <h2>¡Ofertas Imperdibles!</h2>
            <p>¡Aprovecha nuestras increíbles ofertas en productos odontológicos!</p>
            <ul>
              <li>20% de descuento en todos los productos de limpieza</li>
              <li>Compra 2 unidades de pasta dental y llévate una gratis</li>
              <li>Descuentos especiales en equipos de rayos X</li>
            </ul>
            <p>No te pierdas estas oportunidades. ¡Haz tu pedido ahora!</p>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="about-section bg-light p-4">
            <h2>Acerca de Nosotros</h2>
            <p>Somos una empresa dedicada a proveer productos odontológicos de última generación a profesionales de la salud bucal. Nuestro compromiso es ofrecer la mejor calidad y servicio para garantizar la satisfacción de nuestros clientes.</p>
            <p>Contamos con un equipo de expertos en odontología que selecciona cuidadosamente cada producto para garantizar su eficacia y seguridad.</p>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="services-section bg-light p-4">
            <h2>Nuestros Servicios</h2>
            <ul>
              <li>Venta de productos odontológicos de alta calidad.</li>
              <li>Asesoramiento profesional para la elección de productos.</li>
              <li>Entrega rápida y eficiente en todo el país.</li>
              <li>Garantía de satisfacción en todos nuestros productos.</li>
              <li>Servicio de atención al cliente disponible las 24 horas del día.</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="testimonials-section bg-light p-4">
            <h2>Testimonios de Clientes</h2>
            <div className="testimonial">
              <p>"Excelente atención al cliente y productos de alta calidad. ¡Totalmente recomendado!"</p>
              <p>- Dra. Ana López</p>
            </div>
            <div className="testimonial">
              <p>"Siempre compro mis suministros odontológicos aquí. ¡Los precios son inmejorables!"</p>
              <p>- Dr. Martín García</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="contact-section bg-light p-4">
            <h2>Contacto</h2>
            <p>¿Tienes alguna pregunta o consulta? ¡Contáctanos!</p>
            <p>Teléfono: (123) 456-7890</p>
            <p>Correo electrónico: info@sioodontologia.com</p>
          </div>
        </div>
      </div>
{/* Footer */}
<footer className="footer bg-dark text-white text-center py-3 mt-5">
        <div className="container">
          <span>Todos los derechos reservados &copy; 2024 - Sio Odontología</span>
          <div className="social-icons mt-3">
            <a href="https://www.facebook.com/sioodontologia" target="_blank" rel="noopener noreferrer" className="text-white me-2"><i className="bi bi-facebook"></i></a>
            <a href="https://twitter.com/sioodontologia" target="_blank" rel="noopener noreferrer" className="text-white me-2"><i className="bi bi-twitter"></i></a>
            <a href="https://www.instagram.com/sioodontologia" target="_blank" rel="noopener noreferrer" className="text-white me-2"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

