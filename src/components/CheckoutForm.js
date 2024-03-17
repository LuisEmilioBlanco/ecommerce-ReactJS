import React, { useState } from 'react';

const CheckoutForm = ({ onSubmit }) => {
  // Define el estado para los campos del formulario
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    confirmEmail: '',
  });

  // Maneja el cambio en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Verifica que los campos de correo electrónico coincidan
    if (formData.email !== formData.confirmEmail) {
      alert('Los correos electrónicos no coinciden');
      return;
    }
    // Verifica que todos los campos estén completos
    for (const field in formData) {
      if (formData[field] === '') {
        alert(`Por favor complete el campo ${field}`);
        return;
      }
    }
    // Envía los datos del formulario al componente padre
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
      </div>
      <div>
        <label>Apellido:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
      </div>
      <div>
        <label>Teléfono:</label>
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
      </div>
      <div>
        <label>Correo electrónico:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </div>
      <div>
        <label>Confirmar correo electrónico:</label>
        <input type="email" name="confirmEmail" value={formData.confirmEmail} onChange={handleInputChange} />
      </div>
      <button type="submit">Realizar compra</button>
    </form>
  );
};

export default CheckoutForm;
