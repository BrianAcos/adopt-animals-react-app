import React from 'react';
import './ContenidoBlog.css';

class ContenidoBlog extends React.Component {
    render () {
        return (

            <div className="col contenido-blog">
            <button id="sidebarCollapse" className="deslizable">
            F<br></br>I<br></br>L<br></br>T<br></br>R<br></br>O<br></br>S<br></br>&#62;
            </button>
            <div>
              <h1>Informarse antes de adoptar</h1>
              <ul>
                <li>Cuando uno adopta un animal tiene que tener en cuenta que se esta asumiendo una responsabilidad, la
                  cual
                  implica:</li>
                <li>Tener recursos para alimentarlo diariamente.</li>
                <li>Afiliarlo a una veterinaria pagando una cuota mensual.</li>
                <li>Dedicarle tiempo para interactuar con el mismo.</li>
                <li>Cuando surgen vacaciones puede viajar con la familia o deben de procurar un lugar para su estadía.
                </li>
                <li>Estar con ellos en las buenas y en las malas, si se enferma, envejece, o tiene problemas de
                  comportamiento hay que ayudarlo en lugar de abandonarlo o entregarlo a otra persona.</li>
                <li>Si uno decide mudarse o no queda otra opción que ir a un lugar mas chico el animal debe de estar
                  incluido en el plan. No va a tener problema de adaptarse siempre y cuando este con su familia.</li>
                <li>Si adopta un cachorro debe de tener en cuenta que nunca se sabe exactamente el tamaño.</li>
                <li>Se deben de tener conocimientos para educarlo, muchas veces por consentirlos o humanizarlos terminan
                  teniendo problemas de conducta que luego no saben resolver y por lo tanto perjudican al animal.</li>
                <li>Al adoptar un animal adulto usted se asegura su tamaño, en la protectora le pueden informar su
                  carácter
                  y así buscar el mas adecuado para su ritmo de vida.</li>
              </ul>
    
              <p>Adoptar es una RESPONSABILIADD, un COMPROMISO PARA TODA LA VIDA DEL ANIMAL. Demuestra sensibilidad y
                madurez
                ya que muchos animales esperan una oportunidad y tantos otros mueren en las calles porque alguien los
                abandono
                y el resto fue indiferente a su sufrimiento.</p>
    
              <p><small>Fuente <a
                    href="http://www.animalessinhogar.com.uy/adoptar/adoptar-informarse-antes-de-decidir.html">
                    http://www.animalessinhogar.com.uy/adoptar/adoptar-informarse-antes-de-decidir.html</a></small>
              </p>
            </div>
          </div>

        );
    }
}

export default ContenidoBlog;