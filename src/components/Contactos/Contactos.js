import React, { useState, useEffect } from 'react';

function Contactos() {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    // Aquí puedes obtener los contactos desde una API o base de datos
    const contactosDummy = [
      { id: 1, nombre: 'Cesar Gaviria', cargo: 'Vendedor' },
      { id: 2, nombre: 'Yuleidis Peralta', cargo: 'Preventista' },
    ];
    setContactos(contactosDummy);
  }, []);

  const agregarContacto = (nuevoContacto) => {
    setContactos([...contactos, nuevoContacto]);
  };

  const eliminarContacto = (id) => {
    setContactos(contactos.filter((contacto) => contacto.id !== id));
  };

  return (
    <div>
      <h2>Contactos</h2>
      <ul>
        {contactos.map((contacto) => (
          <li key={contacto.id}>
            <h3>{contacto.nombre}</h3>
            <p>Cargo: {contacto.cargo}</p>
            <button onClick={() => eliminarContacto(contacto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <NuevoContacto agregarContacto={agregarContacto} />
    </div>
  );
}

function NuevoContacto({ agregarContacto }) {
  const [nombre, setNombre] = useState('');
  const [cargo, setCargo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoContacto = { id: Date.now(), nombre, cargo };
    agregarContacto(nuevoContacto);
    setNombre('');
    setCargo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del contacto"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cargo del contacto"
        value={cargo}
        onChange={(e) => setCargo(e.target.value)}
      />
      <button type="submit">Agregar Contacto</button>
    </form>
  );
}

export default Contactos;
