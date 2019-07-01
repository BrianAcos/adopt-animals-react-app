import React from 'react';
import './Footer.css';

class Footer extends React.Component {
render() {
    return (

        <footer className="footer-bg">
            <div className="container-fluid">
                <div className="row subir">
                    <ul>
                        <li className=""><a onClick={this.props.goToContactenos} href="Contactenos">Contactenos</a></li>
                        <li>
                            <h6>.</h6>
                        </li>
                        <li className=""><a onClick={() => this.props.goToPolitica(this.props.animal)} href="Politica">Politica de privacidad </a></li>
                    </ul> 
     {/* No funciona  <a href="???"><img src="assets/Subir.png" alt="Subir" className=""></img></a>*/}
                </div>
            </div>
        </footer>

    );
}
}

export default Footer;