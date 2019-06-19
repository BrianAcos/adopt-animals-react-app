import React from 'React';
import './NewAnimal.css';

class NewAnimal extends React.Component {
    render() {
        return (

            <div className="container-fluid">
                <div className="row formulario background">
                    <div className="col col-auto">
                        <form action="url.php" method="post">
                            <h1>Registra un animal para dar en adopción:</h1>
                            <label for="nombre-animal"><span>Nombre:</span></label>
                            <input type="text" id="nombre-animal" placeholder="si aún no tiene deje este campo vacío"></input>
                            <br></br>
                            <label for="especie"><span>Especie:</span></label>
                            <select required id="especie">
                                <option value="">Que mascota es</option>
                                <option value="perro">Perro</option>
                                <option value="gato">Gato</option>
                                <option value="ave">Ave</option>
                                <option value="otro">Otro</option>
                            </select>
                            <br></br>
                            <label for="sexo"><span>Sexo:</span></label>
                            <select required id="sexo">
                                <option value="">Selecciona el sexo</option>
                                <option value="macho">Macho</option>
                                <option value="hembra">Hembra</option>
                            </select>
                            <br></br>
                            <label for="tamaño"><span>Tamaño actual:</span></label>
                            <select required id="tamaño">
                                <option value="">Seleccione el tamaño aproximado</option>
                                <option value="pequeño">Pequeño (&#60; 15Kg)</option>
                                <option value="mediano">Mediano (15 - 25Kg)</option>
                                <option value="grande">Grande (&#62; 25Kg)</option>
                            </select>
                            <br></br>
                            <label for="fecha"><span>Fecha de nacimiento</span></label>
                            <input required type="date" id="fecha"></input>
                            <br></br>
                            <label for="raza"><span>Raza:</span></label>
                            <input type="text" id="raza" placeholder="si desconoce deje este campo vacío"></input>
                            <br></br>
                            <label for="barrio"><span>Barrio:</span></label>
                            <input type="text" id="barrio" placeholder="barrio donde vive con el animal"></input>
                            <br></br>
                            <label for="color-ojos"><span>Color de ojos:</span></label>
                            <input type="text" id="color-ojos" placeholder="Ingrese el color de ojos"></input>
                            <br></br>
                            <label for="color-pelo"><span>Color de pelo:</span></label>
                            <input type="text" id="color-pelo" placeholder="Ingrese el color del pelaje"></input>
                            <br></br>
                            <label for="descripcion"><span>Descripción:</span></label>
                            <textarea id="descripcion" placeholder="Cuentanos más sobre esta mascota"></textarea>
                            <br></br>
                            <label for="imagen"><span>Sube una imagen</span></label>
                            <input type="file" id="imagen"></input>
                            <br></br>
                            <h1>Datos para contactarte:</h1>
                            <label for="nombre-persona"><span>Nombre:</span></label>
                            <input required type="text" id="nombre-persona" placeholder="Ingresa tu nombre"></input>
                            <br></br>
                            <label for="email"><span>Email:</span></label>
                            <input required type="email" id="email" placeholder="Ingresa tu Email"></input>
                            <br></br>
                            <label for="telefono"><span>Teléfono:</span></label>
                            <input required type="text" id="telefono" placeholder="Un teléfono para contactarte"></input>
                            <br></br>
                            <button className="adoptar" type="submit">Dar en adopción</button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default NewAnimal;