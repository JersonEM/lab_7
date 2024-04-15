import React, { useState } from 'react';

export const TextoActualizado = () => {
  // Estado para almacenar la información ingresada por el usuario
  const [informacion, setInformacion] = useState('');

  // Función para manejar cambios en el campo de entrada
  const handleChange = (event) => {
    setInformacion(event.target.value);
  };

  return (
    <div>
      <label htmlFor="informacion">Ingresa tu información:</label>
      <input
        type="text"
        id="informacion"
        value={informacion}
        onChange={handleChange}
        placeholder="Ingresa aquí tu información..."
      />
      <p>Tu información ingresada es: {informacion}</p>
    </div>
  );
};

export default TextoActualizado;

