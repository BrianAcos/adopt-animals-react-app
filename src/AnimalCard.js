import React from 'react';
import './AnimalCard.css';

class AnimalCard extends React.Component {
    render () {
        return (
            <div className="col col-12 col-lg-4 col-sm-6">
            <div className="tarjeta">
                <a href="#animal" onClick={() => this.props.goToFicha(this.props.animal)}>
                    <img src={this.props.animal.imagen} className="animal" alt="perro1"/>
                </a>
                <h1>{this.props.animal.nombre} </h1>
                <p>{this.props.animal.edad} </p>
            </div>
        </div>
        );
    }
}

export default AnimalCard;