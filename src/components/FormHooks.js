//imr
import React, {Fragment} from 'react';
import { useForm } from 'react-hook-form'; //Importamos form Hooks

//sfc

const FormHook = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    
    //Lee los datos de input al precionar el boton
    const onSubmit = (data, event) => {
        console.log(data);
        event.target.reset(); //Limpiara nuestros inputs
    }
    return ( 
        <Fragment>
            <h1>Formulario Hooks</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Ingresa el titulo"
                    id="titulo"
                    name="titulo"
                    className="form-control my-2"
                    {...register("titulo", { 
                        required: true, 
                        maxLength: 20})
                    }
                />

                {errors.titulo && errors.titulo.type === "required" && (
                    <span className="text-danger text-small d-block mb-2">El titulo es requerido</span>
                )}

                {errors.titulo && errors.titulo.type === "maxLength" && (
                        <span className="text-danger text-small d-block mb-2">Exceso de caracteres ingresados</span>
                    )}
                <button className="btn btn-primary">Enviar</button>
            </form>
        </Fragment>
     );
}
 
export default FormHook;