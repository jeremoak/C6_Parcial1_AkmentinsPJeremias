import React from 'react'
import styles from '../../Modules/card.module.css'

const Card = ({ nombre, ciudad }) => {
    return (
        <div className={styles.h2}>
            <h2>Hola, {nombre} </h2>
            <h2>proveniente de {ciudad} </h2>
            <h2>esperamos que estés muy bien </h2>
        </div>
    )
}

export default Card