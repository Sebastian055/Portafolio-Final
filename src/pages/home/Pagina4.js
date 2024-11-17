import React from 'react';
import { Link } from 'react-router-dom';
import './Pagina4.css'; 

function Pagina4() {
  return (
    <div className="pagina4">
      <h1 className="title">Contacto</h1>
      <div className="descripcion">Puedes contactarme a través del formulario o redes sociales.</div>
      <Link to="/pagina1" className="siguientepag">Volver a la página inicial</Link>
    </div>
  );
}

export default Pagina4;
