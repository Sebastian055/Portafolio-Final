import React from 'react';
import { Link } from 'react-router-dom';
import './Pagina3.css'; 

function Pagina3() {
  return (
    <div className="pagina3">
      <h1 className="title">Acerca de mí</h1>
      <div className="descripcion">Soy un desarrollador con pasión por la tecnología.</div>
      <Link to="/pagina4" className="siguientepag">Siguiente página</Link>
    </div>
  );
}

export default Pagina3;
