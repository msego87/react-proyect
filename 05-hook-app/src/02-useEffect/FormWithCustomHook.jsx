import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const {formState, onInputChange, username, email, password, setFormState} = useForm(
        {
            username: '',
            email: '',
            password: ''
        });

    const onResetForm = () => {

        setFormState({
            username: '',
            email: '',
            password: ''
        })

    }
// se desesctructura el formstate desde el 'useForm' para poder acceder a los elementos 'username',
// 'email' y 'password' para ahorrarnos el codigo que esta abajo.
 //   const { username, email, password } = formState;

  return (
    <>
        <h1>Formulario con custom Hook</h1>
        <hr />
        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
        />
        <input 
            type="email"
            className="form-control mt-2"
            placeholder="martin@google.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />
        <input 
            type="password"
            className="form-control mt-2"
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={onInputChange}
        />

        <button onClick={ onResetForm } className="btn btn-primary mt-2">borrar</button>
    </>
  )
}
