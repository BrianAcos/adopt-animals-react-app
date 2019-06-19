import React from 'react';
import Header from './Header.js'
import Footer from './Footer.js';
import FiltrosBlog from './FiltrosBlog.js';
import ContenidoBlog from './ContenidoBlog.js'

class Blog extends React.Component {
    render () {
        return (

            <body>
        
        <Header />

        <div className="container-fluid">
          <div className="row background">

            <FiltrosBlog />

            <ContenidoBlog />

          </div >
        </div >

        <Footer />

      </body>
        );
    }
}

export default Blog;