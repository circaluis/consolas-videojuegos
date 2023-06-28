import React from "react";
import '../hojas-de-estilo/Footer.css';
import '../App.css';

function Footer(props) {
  return (
    <div className='contenedor-padre-footer'>
      <div className='contendor-hijo-footer'>
        <div className='imagen-footer div-footer'>
          <img
          src={require(`../imagenes/imagen-${props.footer}.png`)}
          alt='Imagen del pie de pagina' />
        </div>
        <div className='contenedor-texto-footer div-footer'>
          <p className="copyright">© Copyright {props.anoActual} | Todos los derechos reservados | Desarrollado por <a href="https://www.instagram.com/circaluis/?hl=es-la">CIRCALUIS</a></p>
        </div>    
      </div>
    </div>
  )
}

export default Footer;