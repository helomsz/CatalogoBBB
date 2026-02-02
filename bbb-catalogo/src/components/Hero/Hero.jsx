import React from "react";
import "./Hero.css";
import {Leaf, Star, Flame, Heart, Brain } from "lucide-react";
// import imagemFundo from '../../assets/background-hero.png';

const Hero = () => {
  return (
    <section id="1" className="secaoHero">
      <div className="containerPrincipal">
        {/* Badge superior */}
        <div className="etiquetaDestaque">
          <span className="iconeEstrela">✦</span> O melhor do BBB
        </div>

        {/* Título Principal */}
        <h1 className="tituloPrincipal">
          Reviva os melhores momentos <br />
          do <span className="destaqueTexto">Big Brother</span>
        </h1>

        {/* Subtítulo */}
        <p className="descricaoHero">
          Veja os participantes mais marcantes, as edições inesquecíveis,
          relembre momentos icônicos que fizeram história no programa e favorite
          seus favoritos do BBB para acompanhar tudo de perto.
        </p>

        <div className="videoHeroWrapper">
          <div className="videoHero">
            <div className="videoPlaceholder">
              <span>O VÍDEO VAI AQUI</span>
              <p>em breve</p>
              {/*
              Quando tiver o vídeo, troca por:
              <video
                src=""
                autoPlay
                muted
                loop
                playsInline
              />
              */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
