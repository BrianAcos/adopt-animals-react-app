import React from 'react';
import './Footer.css';

class Footer extends React.Component {
render() {
    return (

        <footer className="footer-bg">
            <div className="container-fluid">
                <div className="row subir">
                    <ul>
                        <li className=""><a href="???">Contactenos</a></li>
                        <li>
                            <h6>.</h6>
                        </li>
                        <li className=""><a href="???">Politica de privacidad</a></li>

                    </ul>
                    <a href="???"><img src="assets/Subir.png" alt="Subir" className=""></img></a>
                </div>
            </div>
        </footer>

    );
}
}

export default Footer;