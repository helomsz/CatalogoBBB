import "./Momentos.css";
import { Camera, Heart, Sparkles } from "lucide-react";

import vitor from '../../assets/momentos/victor-hugo-brigandogif.gif'

const momentos = [
  {
    id: 1,
    titulo: "Primeiro Lançamento",
    ano: 2020,
    descricao: "O dia em que tudo começou.",
  },
  {
    id: 2,
    titulo: "Evento Especial",
    ano: 2020,
    descricao: "Uma noite que ficou marcada.",
    icon: <Camera size={20} />,
  },
  {
    id: 3,
    titulo: "Momento Memorável",
    ano: 2020,
    descricao: "Impossível não lembrar.",
    icon: <Heart size={20} />,
  },
  {
    id: 4,
    titulo: "Momento Memorável",
    ano: 2020,
    descricao: "Impossível não lembrar.",
    icon: <Heart size={20} />,
  },
];

export default function Momentos() {
  return (
    <section id="3" className="momentos">
      <h2 className="momentos-title">Momentos Icônicos</h2>

      <div className="momentos-grid">
        {momentos.map((momento) => (
          <div key={momento.id} className="momento-card">
            <div className="momento-image">
              {/* Placeholder da imagem */}
              <img src={vitor}></img>
            </div>

            <div className="momento-content">

              <div className="linhaCard">
                <h3>{momento.titulo}</h3>
                <p>{momento.ano}</p>
              </div>
              
              <p>{momento.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
