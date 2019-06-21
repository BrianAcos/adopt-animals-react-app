import React from 'react';
import './ListaAnimal.css';
import AnimalCard from './AnimalCard.js'

class ListaAnimal extends React.Component {
    render() {
        return (

            <div className="col contenido">
                <button id="sidebarCollapse" className="deslizable">
                F<br></br>I<br></br>L<br></br>T<br></br>R<br></br>O<br></br>S<br></br>&#62;
                </button>
                <div className="row">
                    
                {this.props.animals.map(item => <AnimalCard animal={item} key={item.id} />)}
                </div>
            </div>

        );
    }
}


export default ListaAnimal;