import React from 'react'
import './progetos.css'
import jogo from './Img/jogo.png'
import site from './Img/sitephp.png'

const Progetos = () => {
  return (
  
<div>
  <h2>Projetos</h2>

  <div className="projetos-grid">
    <div className="projeto">
      <a href="https://jogo-d-forca.netlify.app">
        <img src={jogo} alt="game" 
             data-trigger="hover" data-toggle="popover"
             data-placement="top" 
             data-content="Primeiros passos com React State..." />
      </a>
    </div>

    <div className="projeto">
      <a href="https://moviestar.kesug.com/">
        <img src={site} alt="site" 
             data-trigger="hover" data-toggle="popover"
             data-placement="top" 
             data-content="MovieStar - Meu Primeiro Full-Stack..." />
      </a>
    </div>

    <div className="projeto">
      <p className='pr1'>Em andamento</p>
    </div>

    <div className="projeto">
      <p className='pr1'>Em andamento</p>
    </div>
  </div>
</div>


  
  )
}

export default Progetos


