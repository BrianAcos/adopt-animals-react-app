import React from 'react';
import './AnimalCard.css';

class AnimalCard extends React.Component {
    render () {
        return (
            <div className="col col-12 col-lg-4 col-sm-6">
            <div className="tarjeta">
                <a href="animal.html"><img src={this.props.animal.imagen} class="animal" alt="perro1"/></a>
                <h1>{this.props.animal.nombre} &#9794;</h1>
                <p>{this.props.animal.edad}</p>
            </div>
        </div>
        );
    }
}

export default AnimalCard;