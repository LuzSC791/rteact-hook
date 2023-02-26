//imr
import React, {useState, Fragment}from 'react';
//sfc
const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre:'',
        apellido:''
    });

    const handleInputChange = (event) =>{
        //console.log(event.target.value); // Pendiente del valor que vaya obteniendo el input

        setDatos({
            ...datos, [event.target.name] : event.target.value
            // Hacemos la copia de datos (objeto), [mandamos a traer el name del input para representarlo en el objeto] : asignamos el contenido del input al objeto.

            //Visualizar en la parte de components y Hook
        });
    }

    const enviaDatos = (event) =>{
        event.preventDefault(); // Evita el precesamiento automatico
        console.log(datos.nombre + '' + datos.apellido);
        event.target.reset()
    }

    return ( 
        <Fragment>
            <h1>Formulario</h1> 
            <form className="row" onSubmit={enviaDatos}>
                <div className="col-md-3">
                    <input 
                    placeholder="Ingresa Nombre" 
                    className="form-control"
                    type="text"
                    name="nombre"
                    onChange = {handleInputChange}>
                    </input> 
                </div>
                <div className="col-md-3">
                    <input 
                    placeholder="Ingresa Apellido" 
                    className="form-control"
                    type="text"
                    name="apellido"
                    onChange = {handleInputChange}>

                    </input> 
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary">Enviar</button>
                </div>
            </form>
            <h3>{datos.nombre} - {datos.apellido}</h3>
        </Fragment>
        );
}
 
export default Formulario;