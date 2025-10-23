import React from 'react'
import './sobremim.css'
import bootstrap from './Img/bootstrap.png'
import css from './Img/css.png'
import html from './Img/html.png'
import js from './Img/js.png'
import git from './Img/git.png'
import react from './Img/react.png'
import php from './Img/php.png'
import mysql from './Img/mySql.png'

const SobreMim = () => {
  return (
    <div className="conteiner">
      
      {/* BLOCO SOBRE MIM */}
      <div className="um sobre-mim">
        <h2>Sobre mim</h2>
        <p>
              Desenvolvedor Front-end com experiência em criação de interfaces modernas e responsivas utilizando
               HTML, CSS, JavaScript e React.js. Tenho familiaridade com bibliotecas e frameworks que otimizam a
               experiência do usuário e a performance das aplicações.
               Atuo também no desenvolvimento Back-end com PHP e MySQL, aplicando conceitos de arquitetura
               MVC e boas práticas de integração entre o servidor e o front-end. 
               Sou apaixonado por transformar ideias em soluções funcionais e intuitivas, sempre buscando aprimorar minhas
               habilidades técnicas e entregar resultados de qualidade. terminando a faculdade de Análise e Desenvolvimento de Sistemas
                pela Uniasselvi (2025).
        </p>
      </div>

      {/* BLOCO HABILIDADES */}
      <div className="habilidades">
        <h2>Habilidades</h2>

        <div className="row justify-content-center">
          <div className="habilidades-container">
            <img className="logo" src={html} alt="HTML" title="HTML"  data-trigger="hover" data-toggle="popover" data-placement="top" 
                 data-content="Estruturo páginas da web com foco em semântica e acessibilidade, garantindo uma base sólida para o front-end." />
          </div>
          <div className="habilidades-container">
            <img className="logo" src={css} alt="CSS" title="CSS"  data-trigger="hover" data-toggle="popover" data-placement="top" 
                 data-content="Dentro do poco que eu sei tento criar layouts modernos e responsivos,
                  usando Flexbox, Grid e animações para melhorar a experiência do usuário. " />
          </div>
          <div className="habilidades-container">
            <img className="logo" src={js} alt="JS" title="JS"  data-trigger="hover" data-toggle="popover" data-placement="top" 
                 data-content="Implemento interatividade e dinamismo em páginas web, manipulando DOM." />
          </div>
          <div className="habilidades-container">
            <img className="logo" src={mysql} alt="mySql" title="MySql"  data-trigger="hover" data-toggle="popover" data-placement="top" 
                 data-content="Tenho experiência com MySQL na criação de tabelas, relacionamentos e consultas, integrando o banco ao back-end em PHP." />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="habilidades-container">
            <img className="logo" src={bootstrap} alt="Bootstrap" title="Bootstrap"  data-trigger="hover" data-toggle="popover" data-placement="top" 
                 data-content=" Utilizo o framework para agilizar o desenvolvimento de interfaces responsivas e bem estruturadas. " />
          </div>
          <div className="habilidades-container">
            <img className="logo" src={git} alt="Git" title="Git"  data-trigger="hover" data-toggle="popover" data-placement="top" 
                 data-content=" Não tenho muita experiencia com o versionamento de codico em equipes porem não é algo que me pareça dificil de pegar o jeito. " />
          </div>
          <div className="habilidades-container">
            <img className="logo" src={react} alt="React" title="React"  data-trigger="hover" data-toggle="popover" data-placement="top" 
                 data-content="Tenho conhecimentos básicos em React e estou sempre disposto a aprender mais. Gosto de estudar e trabalhar
                  em equipe para evoluir junto no desenvolvimento de interfaces modernas. . " />
          </div>
          <div className="habilidades-container">
            <img className="logo " src={php} alt="php" title="Php"  data-trigger="hover" data-toggle="popover" data-placement="top" 
                 data-content="Desenvolvo aplicações dinâmicas utilizando PHP, aplicando conceitos de orientação a objetos e integração com MySQL. " />
          </div>
        </div>
      </div>

    </div>
  );
};

export default SobreMim;
