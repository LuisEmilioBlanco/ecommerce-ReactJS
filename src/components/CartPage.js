import React, { useState } from 'react';

const CartPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    phone: ''
  });

  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Verificar si todos los campos están completos y los correos electrónicos coinciden
    const { firstName, lastName, email, confirmEmail, phone } = formData;
    if (firstName !== '' && lastName !== '' && email !== '' && confirmEmail !== '' && phone !== '' && email === confirmEmail) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a la base de datos o realizar cualquier acción necesaria
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title mb-4">Carrito de compras</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nombre:</label>
                  <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Apellido:</label>
                  <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Correo electrónico:</label>
                  <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirmar correo electrónico:</label>
                  <input type="email" className="form-control" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Teléfono:</label>
                  <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={!formValid}>Realizar compra</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;


