import React, { useState } from 'react';

function Rutas() {
  const [rutas, setRutas] = useState([
    { id: 1, nombre: 'Soledad', direccion: 'Calle 68D No. 16C 05' },
    { id: 2, nombre: 'Barranquilla', direccion: 'Carrera17A No. 66A 04' },
  ]);

  const [nuevaRuta, setNuevaRuta] = useState({ nombre: '', direccion: '' });

  const handleChange = (e) => {
    setNuevaRuta({ ...nuevaRuta, [e.target.name]: e.target.value });
  };

  const agregarRuta = () => {
    const nuevaRutaId = rutas.length + 1;
    setRutas([...rutas, { id: nuevaRutaId, ...nuevaRuta }]);
    setNuevaRuta({ nombre: '', direccion: '' });
  };

  const eliminarRuta = (id) => {
    setRutas(rutas.filter((ruta) => ruta.id !== id));
  };

  return (
    <div>
      <h2>Rutas</h2>
      <ul>
        {rutas.map((ruta) => (
          <li key={ruta.id}>
            <h3>{ruta.nombre}</h3>
            <p>Dirección: {ruta.direccion}</p>
            <button onClick={() => eliminarRuta(ruta.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Agregar nueva ruta</h3>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre de la ruta"
        value={nuevaRuta.nombre}
        onChange={handleChange}
      />
      <input
        type="text"
        name="direccion"
        placeholder="Dirección de la ruta"
        value={nuevaRuta.direccion}
        onChange={handleChange}
      />
      <button onClick={agregarRuta}>Agregar</button>
    </div>
  );
}

export default Rutas;