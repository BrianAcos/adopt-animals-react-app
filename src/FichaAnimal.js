import React from 'react';
import './FichaAnimal.css';

class FichaAnimal extends React.Component {
    render () {
        return (

            <div className="col contenido">
        <div className="row">
          <div className="col col-12 col-sm-6 text-center">
            <img src="assets/perro1.png" alt="En-adopción" className="animal"></img>
            <a href="animal-contacto.html"><button className="contacto">Adoptar</button></a>
            <a href=""><button>Guardar</button></a>
            <a href=""><button>Similares</button></a>
          </div>
          <div className="col col-12 col-sm-6">
            <ul className="datos">
              <li>
                <h1>Morena</h1>
              </li>
              <li><span>Especie:</span> Perro</li>
              <li><span>Sexo:</span> Hembra</li>
              <li><span>Tamaño actual:</span> Mediano</li>
              <li><span>Edad:</span> 1 año, 2 meses y 14 días</li>
              <li><span>Raza:</span> Mestizo</li>
              <li><span>Barrio:</span> Aguada</li>
              <li><span>Color de ojos:</span> Marrón</li>
              <li><span>Color de pelo:</span> Negro</li>
              <li><span>Descripcion:</span> Fue encontrada por la calle arenal grande esquina martin garcia, busque al
                posible dueño
                y no lo encontre al parecer era callejera, y bueno no puedo hacerme cargo por mucho tiempo mas, ya tengo
                otra mascota</li>
            </ul>
          </div>
        </div>
        <div className="row comentar">
          <input type="text" id="comentar" placeholder="Comentar..."></input>
          <button>&#62;</button>
        </div>
      </div>

        );
    }
}

export default FichaAnimal;
