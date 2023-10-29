import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Routes from './Routes';
import Header from './components/Header'; // Importa el componente Header

function App() {
  return (
    <Router>
      <div>
        <Header /> {/* Agrega el componente Header al inicio de la aplicación */}
        
        <div style={{ display: 'flex' }}>
          <Sidebar />

          <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
            <Routes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
