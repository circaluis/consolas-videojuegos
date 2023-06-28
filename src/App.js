import React from 'react';
import './App.css';
import Consola from './componentes/Consola.js';
import Logo from './componentes/Logo.js';
import Footer from './componentes/Footer.js';


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Logo
          logo='logo'
        />
        <div className='contenedor-titulo'>
          <h1>MEJORES CONSOLAS DE VIDEOJUEGOS ACTUALMENTE</h1>
        </div>
        <Consola 
          imagenConsola='ps5'
          nombreConsola='PLAYSTATION 5'
          anoLanzamiento='2020'
          descripcion='Una versión completamente digital de la consola PS5 que no trae unidad de disco. Inicia sesión en tu cuenta de PlayStation Network y ve a PlayStation Store para comprar y descargar juegos digitales de PS5 y PS4. Explora toda la línea.' />
          <Consola 
          imagenConsola='switch'
          nombreConsola='NINTENDO SWITCH'
          anoLanzamiento='2017'
          descripcion='Nintendo considera a Switch una consola híbrida. Se puede utilizar como consola de sobremesa con la unidad principal insertada en una estación de acoplamiento para conectarla con un televisor. Alternativamente, puede ser extraída de la base y utilizada de forma similar a una tableta a través de su pantalla táctil o colocada sobre una superficie gracias a su soporte plástico integrado siendo así visible por varios jugadores.' />

          <Consola 
          imagenConsola='xbox'
          nombreConsola='XBOX SERIES X/S'
          anoLanzamiento='2020'
          descripcion='Pásate a lo digital con la Xbox Series S y crea una biblioteca de juegos digitales. Tus juegos, partidas guardadas y copias de seguridad están a salvo en la nube. Además, disfruta de la capacidad de reservar y preinstalar los juegos disponibles próximamente para que puedas jugar a ellos en el momento de su lanzamiento.' />

          <Consola 
          imagenConsola='nes'
          nombreConsola='NINTENDO NES'
          anoLanzamiento='1985-1987'
          descripcion='Está considerada comola videoconsola más exitosa de su época y contribuyó a revitalizar de forma significativa la industria estadounidense de los videojuegos, la cual había sufrido previamente una debacle financiera que ocasionó que varias empresas especializadas quebraran, además de establecer el nivel estándar para consolas posteriores en aspectos primordiales como el diseño de cada juego y planteamiento de mandos.' />
      </div>
      <Footer
        footer='footer'
        anoActual='2023' />
    </div>
  );
}

export default App;
