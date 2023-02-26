// imr
import React,{useState,Fragment} from 'react';
// sfc
const Lista = () => {
    const [arrNum, setArrNum] = useState([1,2,3,4,5,6])

    const [numero, setNum] = useState(5)

    const agregaNum = () =>{
        // console.log('click')
        
        setNum(numero + 1)
        setArrNum([
            ...arrNum, numero
        ])
    }

    return ( 
        <Fragment>
            <h2>Lista</h2>
            <button onClick={agregaNum} >Agregar</button>
            {
                arrNum.map((item, index) => 
                     <li key={index}>  
                        {item} - {index} 
                     </li>
                )
            }
        </Fragment>
     );
}
 
export default Lista;


