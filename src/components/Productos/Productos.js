import React, { useState } from 'react';

function Productos() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Promociones', descripcion: 'Productos en 50% de descuento' },
    { id: 2, nombre: 'Herramientas para  jardines', descripcion: 'Para podar los árboles, riego y cuidado de plantas' },
    { id: 3, nombre: 'Herramientas eléctricas', descripcion: 'Taladros, sierras y más herramientas eléctricas' },
    { id: 4, nombre: 'Pinturas y recubrimientos', descripcion: 'Variedad de pinturas para interiores y exteriores' },
    { id: 5, nombre: 'Fontanería', descripcion: 'Tuberías, grifos y otros accesorios de fontanería' },
    { id: 6, nombre: 'Materiales de construcción', descripcion: 'Cementos, ladrillos y otros materiales de construcción' },
    { id: 7, nombre: 'Ferretería general', descripcion: 'Clavos, tornillos, y otros productos de ferretería' },
    { id: 8, nombre: 'Equipos de seguridad', descripcion: 'Cascos, guantes y otros equipos de protección personal' },
    { id: 9, nombre: 'Herramientas manuales', descripcion: 'Martillos, destornilladores y otras herramientas manuales' },
    { id: 10, nombre: 'Iluminación', descripcion: 'Lámparas, bombillas y soluciones de iluminación' },
  ]);
  const [nuevoProducto, setNuevoProducto] = useState({ nombre: '', descripcion: '' });

  const handleChange = (e) => {
    setNuevoProducto({ ...nuevoProducto, [e.target.name]: e.target.value });
  };  

  const agregarProducto = () => {
    const nuevoProductoId = productos.length + 1;
    setProductos([...productos, { id: nuevoProductoId, ...nuevoProducto }]);
    setNuevoProducto({ nombre: '', descripcion: '' });
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Agregar nuevo producto</h3>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre del producto"
        value={nuevoProducto.nombre}
        onChange={handleChange}
      />
      <input
        type="text"
        name="descripcion"
        placeholder="Descripción del producto"
        value={nuevoProducto.descripcion}
        onChange={handleChange}
      />
      <button onClick={agregarProducto}>Agregar</button>
    </div>
  );
}

export default Productos;
