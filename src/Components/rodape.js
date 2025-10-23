import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope , FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./rodape.css";

const Rodape = () => {
  return (
   <footer className="rodape">
  <div className="contatos">
    <div className="icon-container">
      <a href="https://github.com/izaqueLidorio" target="_blank" rel="noreferrer">
        <FaGithub />
        <span>GitHub</span>
      </a>
    </div>
    <div className="icon-container">
      <a href="https://linkedin.com/in//izaque-lidorio-864703229/" target="_blank" rel="noreferrer">
        <FaLinkedin />
        <span>LinkedIn</span>
      </a>
    </div>
    <div className="icon-container">
      <a href="https://www.instagram.com/izaque_.lidorio/" target="_blank" rel="noreferrer">
        <FaInstagram />
        <span>Instagram</span>
      </a>
    </div>
    <div className="icon-container">
      <a href="https://wa.me/5569992201922" target="_blank" rel="noreferrer">
        <FaWhatsapp />
        <span>WhatsApp</span>
      </a>
    </div>
    <div className="icon-container">
      <a href="mailto:izaquelidorio@gmail.com">
        <FaEnvelope />
        <span>Email</span>
      </a>
    </div>
  </div>

  <p>© 2025 | Desenvolvido por Izaque Lidorio</p>
</footer>

  );
};

export default Rodape;
