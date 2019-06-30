import React from 'react';
import './Filtros.css';

class Filtros extends React.Component {
    render () {
        return (

      <nav id="sidebar" className="asd">
      <div className="sidebar-header col col-auto categorias">
        <form className="busqueda">
          <input type="search" placeholder="¿Que buscas?"></input>
          <button className="search">
            <h6><img src='/assets/lupa.png' alt="lupa"/></h6>
          </button>
        </form>
        <ul>
          <li>Categorias:</li>
          <li>
            <ul>
              <li>Especie:</li>
              <li>
                <input id="perros" type="checkbox"></input>
                <label htmlFor="perros">Perros</label>
              </li>
              <li>
                <input id="gatos" type="checkbox"></input>
                <label htmlFor="gatos">Gatos</label>
              </li>
              <li>
                <input id="aves" type="checkbox"></input>
                <label htmlFor="aves">Aves</label>
              </li>
              <li>
                <input id="otros" type="checkbox"></input>
                <label htmlFor="otros">Otros</label>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>Edad:</li>
              <li>
                <input id="cachorro" type="checkbox"></input>
                <label htmlFor="cachorro">Cachorro (&#60;1 año)</label>
              </li>
              <li>
                <input id="adulto" type="checkbox"></input>
                <label htmlFor="adulto">Adulto (1 - 6 años)</label>
              </li>
              <li>
                <input id="abuelito" type="checkbox"></input>
                <label htmlFor="abuelito">Abuelito (&#62;6 años)</label>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>Sexo:</li>
              <li>
                <input id="macho" type="checkbox"></input>
                <label htmlFor="macho">Macho</label>
              </li>
              <li>
                <input id="hembra" type="checkbox"></input>
                <label htmlFor="hembra">Hembra</label>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>Tamaño:</li>
              <li>
                <input id="pequeño" type="checkbox"></input>
                <label htmlFor="pequeño">Pequeño (&#60; 15Kg)</label>
              </li>
              <li>
                <input id="mediano" type="checkbox"></input>
                <label htmlFor="mediano">Mediano (15 - 25Kg)</label>
              </li>
              <li>
                <input id="grande" type="checkbox"></input>
                <label htmlFor="grande">Grande (&#62; 25Kg)</label>
              </li>
            </ul>
          </li>
          <li>
            <form>
              <button>Filtrar Seleccionados</button>
            </form>
          </li>
        </ul>
      </div>
    </nav>

/* no me funciona
<script>
$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('ocultar');
  });
});  
</script>
*/
        );
    }
}


export default Filtros;