import React from 'react'
import './menu.css'
import Inicio from './inicio'
import Progetos from './progetos'
import SobreMim from './sobre-mim'


const Menu = () => {
  return (
    <div>

      

       

    <nav className="navbar navbar-dark navbar-expand-sm position  ">
      <a className="navbar-brand ">Logo </a>

      <button className=" navbar-toggler" type="button" data-toggle="collapse" data-target="#mynav" aria-expanded="true">

        <span className=" navbar-toggler-icon"></span>
      </button>

      <div id="mynav" className="collapse justify-content-end navbar-collapse">

        <ul className="navbar-nav nav  ">

          <li><a href="#inicio">Inicio</a>
          </li>
          <li><a href="#Sobre mim">SobreMim</a>
          </li>
          <li > <a href="#progetos">Progetos</a>
          </li>
         


        </ul>
      </div>
     </nav>
    
     <div className="tab-content">
      <section  className="secttion1" id="inicio" > <Inicio/></section>
      <section  className="secttion2" id="Sobre mim" > <SobreMim/> </section>
      <section   className="secttion3" id="progetos" > <Progetos/> </section>  
       
      </div>

    </div>

    
  )
  
}



export default Menu