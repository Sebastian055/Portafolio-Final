import React from 'react';
import { Link } from 'react-router-dom';
import './Pagina1.css'; 

function Pagina1() {
  return (
    <div className="pagina1">
      <h1 className="title">Portafolio</h1>
      <div className="nombre">Sebastian Cifuentes</div>
      <Link to="/pagina2" className="siguientepag">Siguiente página</Link>
    </div>
  );
}

export default Pagina1;
