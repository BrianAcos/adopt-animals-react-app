import React from 'react';
import './App.css';
import './Header.css'
import Inicio from './Inicio.js';
import Blog from './Blog.js';
import NewAnimal from './NewAnimal.js';
import FichaAnimal from './FichaAnimal.js';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 1,
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

  Morena = () => {
    this.setState({
      section: 4
    });
  }

  currentSection() {
    if (this.state.section === 1) {
      return <Inicio animals={this.state.Animals} />;
    }

    if (this.state.section === 2) {
      return <Blog />;
    }

    if (this.state.section === 3) {
      return <NewAnimal />;
    }

  if (this.state.section === 4) {
    return <FichaAnimal />;
  }
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
                            <li className="nav-item">
                                <a href="#Morena" onClick={this.Morena}>FichaDelAnimal</a>
                            </li>
                        </ul>
                        <ul className="nav-item registrarse">
                            <li><a href="???">Iniciar seción</a></li>
                            <li> o <a href="???">Registrarse</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

        {this.currentSection()}
        
      <Footer />

      </div>
    );
  }
}

export default App;



