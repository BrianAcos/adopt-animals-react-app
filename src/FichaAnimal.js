import React from 'react';
import './FichaAnimal.css';

class FichaAnimal extends React.Component {
    render () {
        return (

            <div className="col contenido">
        <div className="row ajuste">
          <div className="col col-12 col-sm-6 text-center">
            <img src={this.props.animal.imagen} alt="En-adopción" className="animal"></img>
            <a href="animal-contacto.html"><button className="contacto">Adoptar</button></a>
            <a href='?'><button>Guardar</button></a>
          </div>
          <div className="col col-12 col-sm-6">
            <ul className="datos">
              <li>
                <h1>{this.props.animal.nombre}</h1>
              </li>
              <li><span>Especie:</span> {this.props.animal.especie}</li>
              <li><span>Sexo:</span> {this.props.animal.sexo}</li>
              <li><span>Tamaño actual:</span> {this.props.animal.tamaño}</li>
              <li><span>Edad:</span> {this.props.animal.edad}</li>
              <li><span>Raza:</span> {this.props.animal.raza}</li>
              <li><span>Barrio:</span> {this.props.animal.barrio}</li>
              <li><span>Color de ojos:</span> {this.props.animal.colorOjos}</li>
              <li><span>Color de pelo:</span> {this.props.animal.colorPelo}</li>
              <li><span>Descripcion:</span> {this.props.animal.descripcion}</li>
            </ul>
          </div>
        </div>
        {/* COMENTAR
        <div className="row comentar">
          <input type="text" id="comentar" placeholder="Comentar..."></input>
          <button>&#62;</button>
        </div>
        */}
      </div>

        );
    }
}

export default FichaAnimal;
