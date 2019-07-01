import React from 'react';
import FiltrosBlog from './FiltrosBlog.js';
import ContenidoBlog from './ContenidoBlog.js';

class Blog extends React.Component {
    render () {
        return (

        <div className="container-fluid">
          <div className="row background">

            <FiltrosBlog />

            <ContenidoBlog />

          </div >
        </div >

        );
    }
}

export default Blog;