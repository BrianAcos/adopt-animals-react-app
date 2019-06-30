import React from 'react';
import './App.css';
import './Header.css'
import Inicio from './Inicio.js';
import Blog from './Blog.js';
import NewAnimal from './NewAnimal.js';
import FichaAnimal from './FichaAnimal.js';
import Footer from './Footer';
import Favoritos from './Favoritos';
import Politica from './Politica';
import Contactenos from './Contactenos';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 1,
      favoritos: ['no hay animales'],
      currentAnimal: null,
      Animals: [{
        id: 1,
        imagen: 'assets/perro1.png',
        nombre: 'Morena',
        especie: 'Perro',
        sexo: 'Hembra',
        tamaño: 'Medio',
        edad: '1 año, 2 meses y 14 días',
        raza: 'Mestizo',
        barrio: 'Aguada',
        colorOjos: 'Marrón',
        colorPelo: 'Negro',
        descripcion: 'Fue encontrada por la calle arenal grande esquina martin garcia, busque al posible dueño y no lo encontré al parecer era callejera, y bueno no puedo hacerme cargo por mucho tiempo mas, ya tengo otra mascota'
      },
      {
        id: 2,
        imagen: 'assets/perro2.png',
        nombre: 'Toby',
        especie: 'Perro',
        sexo: 'Macho',
        tamaño: 'Grande',
        edad: '3 años, 5 meses y 21 días',
        raza: 'Mestizo',
        barrio: 'Cordon',
        colorOjos: 'Marrón',
        colorPelo: 'Marrón',
        descripcion: 'Descripcion Toby'
      },
      {
        id: 3,
        imagen: 'assets/perro3.png',
        nombre: 'Luna',
        especie: 'Perro',
        sexo: 'Hembra',
        tamaño: 'Medio',
        edad: '2 años, 1 mes y 5 días',
        raza: 'Mestizo',
        barrio: 'Tres Cruces',
        colorOjos: 'Negro',
        colorPelo: 'Marrón',
        descripcion: 'Descripcion Luna'
      },
      {
        id: 4,
        imagen: 'assets/perro4.png',
        nombre: 'Rocco',
        especie: 'Perro',
        sexo: 'Macho',
        tamaño: 'Pequeño',
        edad: '5 meses y 23 días',
        raza: 'Mestizo',
        barrio: 'Union',
        colorOjos: 'Marrón',
        colorPelo: 'Negro',
        descripcion: 'Descripcion Rocco'
      },
      {
        id: 5,
        imagen: 'assets/perro5.png',
        nombre: 'Lola',
        especie: 'Perro',
        sexo: 'Hembra',
        tamaño: 'Medio',
        edad: '1 año, 9 meses y 28 días',
        raza: 'Mestizo',
        barrio: 'Reducto',
        colorOjos: 'Marrón',
        colorPelo: 'Marrón',
        descripcion: 'Descripcion Lola'
      },
      {
        id: 6,
        imagen: 'assets/perro6.png',
        nombre: 'Otto',
        especie: 'Perro',
        sexo: 'Macho',
        tamaño: 'Pequeño',
        edad: '3 años, 11 meses y 17 días',
        raza: 'SuperCan',
        barrio: 'Carrasco',
        colorOjos: 'Negro',
        colorPelo: 'Blanco',
        descripcion: 'Descripcion Otto'
      }]
    };

    this.handleAñadirAnimal = this.handleAñadirAnimal.bind(this);
  }
  
  goToInicio = () => {
    this.setState({
      section: 1
    });
  }

  goToBlog = () => {
    this.setState({
      section: 2
    });
  }

  goToNewAnimal = () => {
    this.setState({
      section: 3
    });
  }

  goToFicha = (animal) => {
    this.setState({
      section: 4,
      currentAnimal: animal
    });
  }

  goToFavoritos = () => {
    this.setState({
      section: 5,
    });
  }

  goToContactenos = () => {
    this.setState({
      section: 6
    });
  }

  goToPolitica = () => {
    this.setState({
      section: 7
    });
  }

  currentSection() {
  if (this.state.section === 1) {
      return <Inicio goToFicha={this.goToFicha} animals={this.state.Animals} />;
    }

  if (this.state.section === 2) {
      return <Blog />;
    }

  if (this.state.section === 3) {
      return <NewAnimal onAddAnimal={this.handleAñadirAnimal} />;
    }

  if (this.state.section === 4) {
    return <FichaAnimal goToFavoritos={this.goToFavoritos} animal={this.state.currentAnimal}/>;
  }

  if (this.state.section === 5) {
    return <Favoritos favoritos={this.state.favoritos}/>;
  }

  if (this.state.section === 6) {
    return <Contactenos />;
  }

  if (this.state.section === 7) {
    return <Politica />;
  }

} 

addToWishlist = (animal) => {
  if (this.statefavoritos.indexOf(animal) === -1) { //este IF evita que el mismo animal se cawrgue mas de una vez al hacer click
    this.state.favoritos.push(animal)
  }
}

removeToWishlist = (animal) => {
  var i = this.state.favoritos.indexOf(animal);
  this.state.favoritos.splice(i, 1);
  this.goToFavoritos();
}

handleAñadirAnimal (nuevo) {
  this.setState({
    Animals: [...this.state.Animals, nuevo]
  })
}

  render() {
    return (
      <div className="App">
          
        <header className="App-header">
                <nav className="navbar navbar-expand-md navbar-light">
                    <a className="navbar-brand" href="list.html"><img src="assets/LOGO.png" alt="Pets-Rescue" className="logo"></img></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mr-auto">
                            <li className="nav-item">
                                <a href="#Inicio" onClick={this.goToInicio}>Inicio</a>
                            </li>
                            <li>
                                <h5>.</h5>
                            </li>
                            <li className="nav-item">
                                <a href="#NewAnimal" onClick={this.goToNewAnimal}>¡Quiero dar en adopción!</a>
                            </li>
                            <li>
                                <h5>.</h5>
                            </li>
                            <li className="nav-item">
                                <a href="#Blog" onClick={this.goToBlog}>Blog</a>
                            </li>
                            <li>
                                <h5>.</h5>
                            </li>
                            <li className="nav-item">
                                <a href="#goToFicha" onClick={this.goToFavoritos}>Favoritos</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        {this.currentSection()}
        
      <Footer goToContactenos={this.goToContactenos} goToPolitica={this.goToPolitica} />

      </div>
    );
  }
}

export default App;



