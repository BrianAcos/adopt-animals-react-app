import React from 'react';
import Filtros from './Filtros.js';
import ListaAnimal from './ListaAnimal.js';


class Inicio extends React.Component {
  render() {
    return (

        <div className="container-fluid">
          <div className="row background">

            <Filtros />

            <ListaAnimal animals={this.props.animals} />

          </div >
        </div >

    );
  }
}

export default Inicio;