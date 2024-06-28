import React, { useState } from 'react';

function Facturacion() {
  const [facturas, setFacturas] = useState([
    { id: 1, cliente: 'Empresa Y', monto: 3000, fecha: '2024-05-01' },
    { id: 2, cliente: 'Empresa X', monto: 4000, fecha: '2024-05-15' },
  ]);

  const [nuevaFactura, setNuevaFactura] = useState({ cliente: '', monto: '', fecha: '' });

  const handleChange = (e) => {
    setNuevaFactura({ ...nuevaFactura, [e.target.name]: e.target.value });
  };

  const generarFactura = () => {
    const nuevaFacturaId = facturas.length + 1;
    setFacturas([...facturas, { id: nuevaFacturaId, ...nuevaFactura }]);
    setNuevaFactura({ cliente: '', monto: '', fecha: '' });
  };

  const eliminarFactura = (id) => {
    setFacturas(facturas.filter((factura) => factura.id !== id));
  };

  return (
    <div>
      <h2>Facturación</h2>
      <ul>
        {facturas.map((factura) => (
          <li key={factura.id}>
            <p>Cliente: {factura.cliente}</p>
            <p>Monto: ${factura.monto}</p>
            <p>Fecha: {factura.fecha}</p>
            <button onClick={() => eliminarFactura(factura.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Generar nueva factura</h3>
      <input
        type="text"
        name="cliente"
        placeholder="Nombre del cliente"
        value={nuevaFactura.cliente}
        onChange={handleChange}
      />
      <input
        type="number"
        name="monto"
        placeholder="Monto"
        value={nuevaFactura.monto}
        onChange={handleChange}
      />
      <input
        type="date"
        name="fecha"
        value={nuevaFactura.fecha}
        onChange={handleChange}
      />
      <button onClick={generarFactura}>Generar</button>
    </div>
  );
}

export default Facturacion;