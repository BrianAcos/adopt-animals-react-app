import React from 'react';
import './App.css';

class DatosContacto extends React.Component {
    render () {
        return (

            <div class="datos-contacto">
              <ul>
                <li>
                  <h1>Datos para contactarte:</h1>
                </li>
                <li><span>Nombre:</span> Brian Acosta</li>
                <li><span>Email:</span> brianacostamartinez@gmail.com</li>
                <li><span>Teléfono:</span> 098 806 266</li>
              </ul>
            </div>

        );
    }
}

export default DatosContacto;