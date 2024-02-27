import { useEffect } from "react";
import { useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Martin',
        email: 'martin@google.com',
    })

    const {username, email} = formState;

    const onInputChange = ({target}) =>{
        const {name, value} = target;
        setFormState({
            ...formState,
            //propiedades computadas de los objetos, JS 
            [name]: value
        })
    }

    /************************************************************************************************** 
    En el segundo parametro del useEffect(,[formState]), hace que el hook se lance cuando hay una 
    modificacion en el formstate. Si ponemos [] el hook solo se lanza cuando se carga por primera vez
    la aplicacion. 
    Se recomienda utilizar varios useEffect que 1 solo que haga varias cosas.
    ***************************************************************************************************/
    useEffect(() => {
        //console.log('useEffect changed!');
    }, []);

    useEffect(() => {
        //console.log('formState changed!');
    }, [formState]);

    useEffect(() => {
        //console.log('email changed!');
    }, [email]);

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />
        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
        />
        {            
            username === 'strider2' ? <Message /> : null
        }
        <input 
            type="email"
            className="form-control mt-2"
            placeholder="martin@google.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />

        
    </>
  )
}
