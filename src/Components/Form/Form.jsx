import React from 'react'
import { useState } from 'react';
import Card from '../Card/Card';
import styles from '../../Modules/Form.module.css'



const Form = () => {
    
    const [user, setUser] = useState({
        nombre: "",
        ciudad: "",
        });

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLogged, setIsLogged] = useState(false);

    const handleChange = (e, propiedad) => {
        setUser({ ...user, [propiedad]: e.target.value });
        };

    const handleSubmit = (e) => {
        e.preventDefault();

    
    

    const withoutSpaces = user.nombre.trim();



    const nameIsValid = user.nombre.length >= 3 && (user.nombre === withoutSpaces) ;
    const cityIsValid = user.ciudad.length >= 6;

    if (!cityIsValid || !nameIsValid) {

        setError(true);
        setErrorMessage("¡Por favor chequea que la información sea correcta!")}
    else{
    setIsLogged(true)}
    }

    return (
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>

                <label htmlFor="Nombre">Tu primer nombre</label>
                <input id='nombre' type="text" name='' onChange={(e) => handleChange(e, "nombre")} />

                <label htmlFor="ciudad">Ciudad de Argentina</label>
                <input id='ciudad' type="text" name='' onChange={(e) => handleChange(e, "ciudad")} />

                <button className={styles.button}>Enviar</button>

                {error? <span> {errorMessage} </span>: null}

            </form>

            {isLogged && (
            <Card nombre={user.nombre} ciudad={user.ciudad} />
            )}


        </div>
    )
}


export default Form