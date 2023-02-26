// imr
import React, {Fragment} from 'react';
//sfc
const Jsx = () => {
    // const saludo = 'Hola jsx';
    const temp = 19;
    return ( 
        <Fragment>
            <h3>Hace Frio o Calor?</h3>
        <h4>
            {
                // Operador ternario (if en una sola línea)
                temp > 20 ? 'Calor' : 'Frio'
            }
        </h4>
        </Fragment>
     );
}
 
export default Jsx;