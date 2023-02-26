//imr - Para atajo de import react import React from 'react';
import React,{useState, Fragment} from 'react';
import { set } from 'react-hook-form';

// sfc - Para atajo de función
const Contador = () => { // Creación - /
    //Logica - *
    const [num, setNum] = useState(0);
    // const [num, setNum] = useState('Hola desde STATE');

    //Función para evento
    const aumentar = () =>{
        console.log('Diste un click');
        setNum(num+1);
    }
    return ( 
        // Vista - *
        <Fragment>
            <h3>Primer componente en react {num}</h3> 
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
    );
}
 
export default Contador; // Exportación - /