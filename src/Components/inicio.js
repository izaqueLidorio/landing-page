import React, {Fragment}  from 'react'
import './inicio.css'
import Eudesenho from './Img/Eudesenho.jpg'


const Inicio = () => {
  return (

    <Fragment>
        
             
            
          
            <div className=' ajuste d-none d-md-block' > 
              <img className='img img-fluid ' src={Eudesenho} alt="Minha foto" /> 
               <h1 className='h1'>
               Ola, eu sou  <br/> Izaque Lidorio
               </h1> 
                <h4>Desenvolvedor Front-end</h4>
               </div>

             {/* imagem,texto para tela pequena */}

             <div className=' ajuste1 d-block d-md-none'> 
             
                <img className='img1'src={Eudesenho} alt="Minha foto" />
                <h1>
                 Ola, eu sou  <br/> Izaque Lidorio
                </h1> 
                <h4>Desenvolvedor Front-end</h4>
             </div>
        
     </Fragment>
  )
}

export default Inicio