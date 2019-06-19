import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import Filtros from './Filtros.js';
import ListaAnimal from './ListaAnimal.js';


class Inicio extends React.Component {
  render() {
    return (

      <body>
        
        <Header />

        <div className="container-fluid">
          <div className="row background">

            <Filtros />

            <ListaAnimal />

          </div >
        </div >

        <Footer />

      </body>

    );
  }
}

export default Inicio;