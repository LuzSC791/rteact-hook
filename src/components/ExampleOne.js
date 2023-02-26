import React, { Fragment } from 'react';
import {useForm} from 'react-hook-form';
const ExampleOne = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data, e)=>{
        console.log(data);
        e.target.reset();
    }

    return ( 
    <Fragment>
        <h2>Exercise 1</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
            id="name"
            name="name"
            placeholder="Enter name"
            className="form-control my-2"
            {
                ...register("name",{
                    required: true,
                    maxLength: 30
                })
            }
            >
            </input>
            {errors.name && errors.name.type === "required" &&(
                <span className="text-danger text-small d-block mb-2">
                    Required name
                </span>
            )}

            {errors.name && errors.name.type === "maxLength" &&(
                <span className="text-danger text-small d-block mb-2">
                    Maximum characters is 30
                </span>
            )}
            <input
                id="description"
                name="description"
                placeholder="Enter description"
                className="form-control my-2"
                {
                    ...register("description",{
                        required:true,
                        minLength: 10,
                        maxLength: 20
                    })
                }
            />

            {errors.description && errors.description.type === "required" && (
                <span className="text-danger text-small d-block mb-2">
                    Required description
                </span>
            )}

            {errors.description && errors.description.type === "minLength"&&(
               <span className="text-danger text-small d-block mb-2">
                    Min characters is 10
               </span> 
            )}

            {errors.description && errors.description.type === "maxLength" && (
                <span className="text-danger text-small d-block mb-2">
                    Maximum characters is 20
                </span>
            )}

            <button 
            className="btn btn-primary"
            >Add</button>
        </form>
    </Fragment> 
    );
}
 
export default ExampleOne;
