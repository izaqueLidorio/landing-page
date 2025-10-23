import React from "react";
import './estudo_hobbies.css'
import Hobbie from './Img/hobbies.png'

const Hobbies = () => {
  return (
  
        
     
      <div className="bloco bloco-passatempos">
        <div className="texto">
          <h2>Hobbies</h2>
          <ul>
            <li>Sair com os amigos para comer</li>
             <li>Tomar tereré</li>
           <li> Construir coisas aleatorias que acho interesante</li>
            <li>Andar de moto</li>
          </ul>
        </div>
        <div className="imagem img2">
          <img src={Hobbie} alt="hobby" />
        </div>
      </div>

  )
}

export default Hobbies;
