import React from 'react'
import './menu.css'
import Inicio from './inicio'
import Progetos from './progetos'
import SobreMim from './sobre-mim'
import Estudos from './estudo'
import Hobbies from './hobbies'
import Contato from './rodape'
const Menu = () => {
  return (
    <div>

      

       

    <nav className="navbar navbar-dark navbar-expand-sm position  ">


      <button className=" navbar-toggler" type="button" data-toggle="collapse" data-target="#mynav" aria-expanded="true">

        <span className=" navbar-toggler-icon"></span>
      </button>

      <div id="mynav" className="collapse justify-content-end navbar-collapse">

        <ul className="navbar-nav nav  ">

          <li><a href="#inicio">Inicio</a>
          </li>
          <li><a href="#sobre mim">Sobre Mim</a>
          </li>
           <li > <a href="#estudos">Estudos </a>
          </li>
          <li > <a href="#hobbies">hobbies</a>
          </li>
          <li > <a href="#progetos">Progetos</a>
          </li>
           <li > <a href="#contato">Contato</a>
          </li>
         


        </ul>
      </div>
     </nav>
    
     <div className="tab-content">
      <section  className="secttion1" id="inicio" > <Inicio/></section>
      <section  className="secttion2" id="sobre mim" > <SobreMim/> </section> 
      <section   className="secttion3" id="estudos" > <Estudos/> </section>
      <section   className="secttion4" id="hobbies" > <Hobbies/> </section>
      <section   className="secttion5" id="progetos" > <Progetos/> </section>  
      <section   className="secttion6" id="contato" > <Contato/> </section>  
        
      </div>

    </div>

    
  )
  
}



export default Menu