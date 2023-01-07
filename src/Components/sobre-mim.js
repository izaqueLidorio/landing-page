import React from 'react'
import './sobremim.css'
import bootstrap from './Img/bootstrap.png'
import css from './Img/css.png'
import html from './Img/html.png'
import js from './Img/js.png'
import git from './Img/git.png'
import react from './Img/react.png'


const SobreMim = () => {
  
  return (
     <div className='um sobre-mim '>
       
         <h2>Sobre mim</h2>
           <p>Meu nome é Izaque Lidorio e eu sou um apreciador da <br />tecnologia por isso decidi trilhar o caminho da <br />programação. Estou em busca de experiência proficional na<br /> area de Desenvolvimento Web. Atualmente estou focando nas tecnologias voltadas para o FrontEnd.</p>
           
    

       <div className='container p-4'> 

        <h2>Habilidades </h2>
        
           <div className="row justify-content-center">

              <div className="habilidades-container">
                <img className='logo' src={html} title="HTML" alt="logo html"  data-trigger="hover" data-toggle="popover" data-placement="top" 
                 data-content="Considero meus conhecimentos de html como avançado tento sempre utilizar as tags que se encaixam com a proposta do que esta sendo feito. "
                 />
              </div>
              
               <div className="habilidades-container ">
                <img className=' logo' src={css} alt="logo css" title="CSS"  data-trigger="hover" data-toggle="popover" data-placement="top" 
                 data-content="Tenho conhecimento básico no css normalmente consigo me virar para fazer o estilo desejado para alguma aplicação que eu esteja fazendo."
                /> 
              </div>

              <div className="habilidades-container ">
                <img className=' logo' src={js} alt="logo js" title="JAVASCRIPT"  data-trigger="hover" data-toggle="popover" data-placement="top" 
                 data-content="Tenho um certo conhecimento em js porem eu teria dificuldade em fazer algo mais complexo com ele,eu consigo entender oque
                 um bloco de codico esta fazendo mais eu teria dificuldade em fazer este bloco de codico acredito que me falta praticar. " /> 
              </div>
          </div>

            <div className="row justify-content-center">
              
              <div className="habilidades-container">
              <img className='  logo' src={bootstrap} alt="logo bootstrap" title="BOOTSTRAP"  data-trigger="hover" data-toggle="popover" data-placement="top" 
                 data-content="Gosto bastante da sua proposta de dar uma certa agilidade na hora de fazer um site e geralmente eu uso para fazer coisas mais simples ou oque 
                 eu não tenha tanta habilidade para fazer." /> 
              </div>

              <div className="habilidades-container ">
              <img className=' logo' src={git} alt="logo git" title="GIT"  data-trigger="hover" data-toggle="popover" data-placement="top" 
                 data-content="Utilizado para o versionamento de codico e o armazenamento no GitHub como eu não tenho muitos projetos acabo por não utilizar muito. "
                 /> 
              </div>

              <div className="habilidades-container ">
              <img className=' logo' src={react} alt="logo react" title="REACT"  data-trigger="hover" data-toggle="popover" data-placement="top" 
                 data-content="O React é uma tecnologia que eu gostei bastante quando eu vi este projeto esta sendo feito com ele porem para fazer coisas mais complexas
                 é exigido nele o js que eu tenho um pouco de dificuldade. " /> 
              </div>
            </div>
          
       </div>
    </div>
  )
   
}

export default SobreMim