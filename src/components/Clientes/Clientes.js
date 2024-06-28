import React, { useState, useEffect } from 'react';

function Clientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    // Aquí puedes obtener los clientes desde una API o base de datos
    const clientesDummy = [
      { id: 1, nombre: 'Empresa X', contacto: 'Cesar Maldonado' },
      { id: 2, nombre: 'Empresa Y', contacto: 'Irma Osorio' },
    ];
    setClientes(clientesDummy);
  }, []);

  const agregarCliente = (nuevoCliente) => {
    setClientes([...clientes, nuevoCliente]);
  };

  const eliminarCliente = (id) => {
    setClientes(clientes.filter((cliente) => cliente.id !== id));
  };

  return (
    <div>
      <h2>Clientes</h2>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            <h3>{cliente.nombre}</h3>
            <p>Contacto: {cliente.contacto}</p>
            <button onClick={() => eliminarCliente(cliente.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <NuevoCliente agregarCliente={agregarCliente} />
    </div>
  );
}

function NuevoCliente({ agregarCliente }) {
  const [nombre, setNombre] = useState('');
  const [contacto, setContacto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoCliente = { id: Date.now(), nombre, contacto };
    agregarCliente(nuevoCliente);
    setNombre('');
    setContacto('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del cliente"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Contacto del cliente"
        value={contacto}
        onChange={(e) => setContacto(e.target.value)}
      />
      <button type="submit">Agregar Cliente</button>
    </form>
  );
}

export default Clientes;