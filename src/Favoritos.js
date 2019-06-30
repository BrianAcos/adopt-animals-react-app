import React from 'react';
import './Favoritos.css'

class Favoritos extends React.Component {
    render () {
        return (
            <div>
                <h1>Favoritos</h1>
                <p>{this.props.favoritos}</p>
            </div>
        );
    }
}

export default Favoritos;