import React, { useState } from 'react';

export default function Formularios() {
  const [form, setForm] = useState({});
  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h2>FORMULARIOS</h2>
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre || ''}
          onChange={handleChange}
          placeholder="✍🏾 un mensaje ..."
        />
        <br />

        <label htmlFor="genero">
          Género:
          <select
            id="genero"
            name="genero"
            value={form.genero || ''}
            onChange={handleChange}
            required
          >
            <option value="">---</option>
            <option value="Femenino">Femenino</option>
            <option value="Masculino">Masculino</option>
          </select>
        </label>
        <br />

        <h2>MODELO DE INTERVENCIÓN PREFERIDO</h2>

        <label htmlFor="humanista">
          <input
            type="radio"
            id="humanista"
            name="paradigmadeintervencion"
            value="Enfoque Humanista"
            onChange={handleChange}
          />
          Humanista
        </label>
        <br />

        <label htmlFor="conductual">
          <input
            type="radio"
            id="conductual"
            name="paradigmadeintervencion"
            value="Enfoque Conductual"
            onChange={handleChange}
          />
          Conductual
        </label>
        <br />

        <label htmlFor="sistemica">
          <input
            type="radio"
            id="sistemica"
            name="paradigmadeintervencion"
            value="Terapia Sistémica"
            onChange={handleChange}
          />
          Terapia Sistémica
        </label>
        <br />

        <label htmlFor="gestalt">
          <input
            type="radio"
            id="gestalt"
            name="paradigmadeintervencion"
            value="Terapia Gestalt"
            onChange={handleChange}
          />
          Terapia Gestalt
        </label>
        <br />

        <label htmlFor="psicoanalitica">
          <input
            type="radio"
            id="psicoanalitica"
            name="paradigmadeintervencion"
            value="Psicoanálisis"
            onChange={handleChange}
          />
          Psicoanálisis
        </label>
        <br />

        <label htmlFor="socioconstruccionista">
          <input
            type="radio"
            id="socioconstruccionista"
            name="paradigmadeintervencion"
            value="Enfoque Socioconstruccionista"
            onChange={handleChange}
          />
          Enfoque Socioconstruccionista
        </label>
        <br />

        <br />

        <label htmlFor="terminos">ACEPTO TÉRMINOS</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChange}
        />

        <h4>
          {form.nombre && form.paradigmadeintervencion && (
            <>
              {form.nombre} según refieres tu modelo de intervención seleccionado: {form.paradigmadeintervencion}
            </>
          )}
        </h4>
      </form>
    </>
  );
}
