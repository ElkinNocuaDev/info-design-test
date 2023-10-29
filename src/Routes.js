// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Tramos from './components/Tramos'; // Importa Tramos desde la carpeta components
import Cliente from './components/Cliente'; // Importa Cliente desde la carpeta components
import TramosCliente from './components/TramosCliente'; // Importa TramosCliente desde la carpeta components

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Tramos />} /> {/* Define la ruta raíz para mostrar el componente Tramos */}
      <Route path="/cliente" element={<Cliente />} />
      <Route path="/tramos-cliente" element={<TramosCliente />} />
    </Routes>
  );
};

export default RoutesComponent;
