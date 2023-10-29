import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-light border-end" style={{ width: '100px' }}>
      <div className="d-flex flex-column align-items-start p-3">
        <ul className="nav flex-column mb-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Tramos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cliente" className="nav-link">
              Cliente
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tramos-cliente" className="nav-link">
              Tramos-Cliente
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

