import React from 'react';
import './FiltrosBlog.css'

class FiltrosBlog extends React.Component {
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
          <ul className="barra-blog">
            <li><a href="blog.html">Publicaciones Recientes</a></li>
            <li><a href="blog.html">Informarse antes de adoptar</a></li>
            <li><a href="blog.html">Para tener en cuenta antes de adoptar</a></li>
          </ul>
        </div>
      </nav> 
        );
    }
}

export default FiltrosBlog;