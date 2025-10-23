
import React from "react";
import './estudo_hobbies.css'
import Livro from './Img/estudo.png'
import { FiExternalLink } from "react-icons/fi";


const Estudos = () => {
  return (
  
        
   
     <div className="bloco bloco-estudos">
      <div className="imagem img1">
        <img src={Livro} alt="livro" />
      </div>
      <div className="texto">
        <h2>Estudos</h2>
        <ul className="lista-estudos">
          <li>
            <a href="https://www.youtube.com/@cursoemvideo" target="_blank" rel="noopener noreferrer">
              Gustavo Guanabara (Youtube) <FiExternalLink />
            </a>
          </li>
          <li>
            <a href="https://www.udemy.com/user/matheus-battisti/" target="_blank" rel="noopener noreferrer">
              Matheus Battisti (udemy) <FiExternalLink />
            </a>
          </li>
          <li>
            <a href="https://www.udemy.com/user/f8dafc2f-5f70-4007-a0db-4df14696b5c6/" target="_blank" rel="noopener noreferrer">
              João Ribeiro (udemy) <FiExternalLink />
            </a>
          </li>
          <li>
            <a href="https://onebitcode.com/" target="_blank" rel="noopener noreferrer">
             Onebitcode (onebitcode.com) <FiExternalLink />
            </a>
          </li>
        </ul>
      </div>
    </div>

    

  )
}

export default Estudos;
