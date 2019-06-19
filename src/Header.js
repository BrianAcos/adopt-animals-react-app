import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (

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
                                <a href="list.html">Inicio</a>
                            </li>
                            <li>
                                <h5>.</h5>
                            </li>
                            <li className="nav-item">
                                <a href="newAnimal.html">¡Quiero dar en adopción!</a>
                            </li>
                            <li>
                                <h5>.</h5>
                            </li>
                            <li className="nav-item">
                                <a href="blog.html">Blog</a>
                            </li>
                        </ul>
                        <ul className="nav-item registrarse">
                            <li><a href="???">Iniciar seción</a></li>
                            <li> o <a href="???">Registrarse</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;