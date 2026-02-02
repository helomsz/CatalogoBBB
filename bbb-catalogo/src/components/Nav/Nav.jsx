import React, { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import logoBBB from '../../assets/logobbb.png';
import "./Nav.css";

export default function Navbar({ quantidadeFavoritos }) {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="containerCabecalho">
      <nav className="wrapperNavegacao">

        <div className="containerLogo">
          <img 
            className="iconeLogo" 
            src={logoBBB} 
            alt="Logo do Reality Show Big Brother BR" 
          />
        </div>

        <ul className="listaLinks">
          <li><a href="#1" className="linkNavegacao">Início</a></li>
          <li><a href="#2" className="linkNavegacao">Participantes</a></li>
          <li><a href="#3" className="linkNavegacao">Momentos Icônicos</a></li>
          <li><a href="#4" className="linkNavegacao">Edições</a></li>
        </ul>

        <div className="botaoFavorio">
          {quantidadeFavoritos > 0 ? (
            <span className="contadorFavoritos">
              {quantidadeFavoritos}
            </span>
          ) : (
            <Heart size={17} fill="#CC2985" className="iconeCoracao" />
          )}
          <a href="#2" className="favoritosNav">Favoritos</a>
        </div>


        <button onClick={() => setAberto(!aberto)} className="botaoMenu">
          {aberto ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div className={`menuMobile ${aberto ? "menuAberto" : ""}`}>
        <a onClick={() => setAberto(false)} href="#hero" className="linkMobile">Início</a>
        <a onClick={() => setAberto(false)} href="#about" className="linkMobile">Sobre</a>
        <a onClick={() => setAberto(false)} href="#services" className="linkMobile">Serviços</a>
        <a onClick={() => setAberto(false)} href="#testimonials" className="linkMobile">Depoimentos</a>
      </div>
    </header>
  );
}