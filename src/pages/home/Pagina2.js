import React from 'react';
import { Link } from 'react-router-dom';
import './Pagina2.css'; // Importa los estilos específicos para Pagina2

function Pagina2() {
  return (
    <div className="pagina2">
      <h1 className="title">Proyectos</h1>
      <div className="descripcion">Aquí puedes ver mis proyectos y más información.</div>
      <Link to="/pagina3" className="siguientepag">Siguiente página</Link>
    </div>
  );
}

export default Pagina2;
