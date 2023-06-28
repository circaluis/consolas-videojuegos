import '../App.css';
import LogoDelSitio from '../imagenes/logo.png';


function Logo(props) {
  return (
    <div  className='contenedor-logo'>
      <img 
      className='imagen-logo'
      src={LogoDelSitio}
      alt='Logo del sitio'/>
    </div>
  )
}

export default Logo;