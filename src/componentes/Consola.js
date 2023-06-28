import React from "react";
import '../hojas-de-estilo/Consola.css';

function Consola(props) {
  return (
    <div className='contenedor-consola'>
      <img 
        className='imagen-consola' 
        src={require(`../imagenes/consola-${props.imagenConsola}.png`)}
        alt='Imagen de PS5'/>  

       <div className='contenedor-texto-consola'>
        <p className='nombre-consola'>{props.nombreConsola}</p>
        <p className='ano-consola'>Año de lanzamiento: <strong>{props.anoLanzamiento}</strong></p>
        <p className='descripcion-consola'>"{props.descripcion}"</p>
      </div> 

    </div>   

  )
}

export default Consola;