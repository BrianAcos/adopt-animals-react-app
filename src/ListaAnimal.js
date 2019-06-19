import React from 'react';
import './ListaAnimal.css';

class ListaAnimal extends React.Component {
    render() {
        return (

            <div className="col contenido">
                <button id="sidebarCollapse" className="deslizable">
                F<br></br>I<br></br>L<br></br>T<br></br>R<br></br>O<br></br>S<br></br>&#62;
                </button>
                <div className="row">
                    <div className="col col-12 col-lg-4 col-sm-6">
                        <div className="tarjeta">
                            <a href="animal.html"><img src="assets/perro1.png" className="animal" alt="perro1"></img></a>
                            <h1>Morena &#9792;</h1>
                            <p>1 año, 2 meses y 14 días</p>
                        </div>
                    </div>
                    <div className="col col-12 col-lg-4 col-sm-6">
                        <div className="tarjeta">
                            <a href="animal.html"><img src="assets/perro2.png" className="animal" alt="perro1"></img></a>
                            <h1>Toby &#9794;</h1>
                            <p>3 años, 5 meses y 21 días</p>
                        </div>
                    </div>
                    <div className="col col-12 col-lg-4 col-sm-6">
                        <div className="tarjeta">
                            <a href="animal.html"><img src="assets/perro3.png" className="animal" alt="perro1"></img></a>
                            <h1>Luna &#9792;</h1>
                            <p>2 años, 1 mes y 5 días</p>
                        </div>
                    </div>
                    <div className="col col-12 col-lg-4 col-sm-6">
                        <div className="tarjeta">
                            <a href="animal.html"><img src="assets/perro4.png" className="animal" alt="perro1"></img></a>
                            <h1>Rocco &#9794;</h1>
                            <p>5 meses y 23 días</p>
                        </div>
                    </div>
                    <div className="col col-12 col-lg-4 col-sm-6">
                        <div className="tarjeta">
                            <a href="animal.html"><img src="assets/perro5.png" className="animal" alt="perro1"></img></a>
                            <h1>Lola &#9792;</h1>
                            <p>1 año, 9 meses y 28 días</p>
                        </div>
                    </div>
                    <div className="col col-12 col-lg-4 col-sm-6">
                        <div className="tarjeta">
                            <a href="animal.html"><img src="assets/perro6.png" class="animal" alt="perro1"></img></a>
                            <h1>Otto &#9794;</h1>
                            <p>3 años, 11 meses y 17 días</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default ListaAnimal;