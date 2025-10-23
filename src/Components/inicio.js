import React, {Fragment}  from 'react'
import './inicio.css'
import imagen_curriculo from './Img/imagen_curriculo.jpg'
import { FaMapMarkerAlt } from "react-icons/fa";


const Inicio = () => {
  return (

    <Fragment>
        
             
          
     <div className="perfil-container">
        <div className="perfil">
         <img className="perfil-img" src={imagen_curriculo} alt="Minha foto" />
       </div>
 
       <div className="perfil-texto">
        <h1>Olá, eu sou <br /> Izaque Lidorio</h1>
        <h4><FaMapMarkerAlt /> São Miguel do Guaporé,<br />     Rondônia, Brasil</h4>
       </div>
    </div>

   

     </Fragment>
  )
}

export default Inicio