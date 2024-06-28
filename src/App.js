import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Productos from "./components/Productos/Productos";
import Facturacion from "./components/Facturacion/Facturacion";
import Rutas from "./components/Rutas/Rutas";
import Clientes from "./components/Clientes/Clientes";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import "./App.css";
import logoImg from "./assets/logo.png"; // Importa la imagen del logotipo
import backgroundImg from "./assets/Local.png"; // Importa la imagen de fondo
import image1 from "./assets/pinturas.png";
import image2 from "./assets/pisos y baños.png";
import image3 from "./assets/herramientas.png";
import Contactos from "./components/Contactos/Contactos";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <nav className="navbar">
            <div className="logo">
              <div className="logo-container">
                <img src={logoImg} alt="Ferreteria WestCoastLogo" />
              </div>
            </div>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/productos">Servicios</Link>
              </li>
              <li>
                <Link to="/facturacion">Facturación</Link>
              </li>
              <li>
                <Link to="/rutas">Rutas</Link>
              </li>
              <li>
                <Link to="/contactos">Contactos</Link>
              </li>
              <li>
                <Link to="/clientes">Clientes</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main">
          <Routes>
            <Route path="/productos" element={<Productos />} />
            <Route path="/facturacion" element={<Facturacion />} />
            <Route path="/rutas" element={<Rutas />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
          <div className="image-gallery">
            <img src={image1} alt="pinturas" />
            <img src={image2} alt="pisos y baños" />
            <img src={image3} alt="herramientas" />
         
          </div>
        </main>
        <footer className="footer">
          <p>&copy; 2024 Ferreteria WestCoast. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
