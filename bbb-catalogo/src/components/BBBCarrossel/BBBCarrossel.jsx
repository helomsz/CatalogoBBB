import { useEffect, useRef, useState } from "react";
import { Crown, Mic, Calendar, Users } from "lucide-react";
import "./BBBCarrossel.css";
import bbb1 from "../../assets/edicoes/bbb1.png";
import bbb2 from "../../assets/edicoes/bbb2.png";
import bbb3 from "../../assets/edicoes/bbb3.png"
import bbb4 from "../../assets/edicoes/bbb4.png"
import bbb5 from "../../assets/edicoes/bbb5.png"
import bbb6 from "../../assets/edicoes/bbb6.png"

const edicoes = [
  {
    id: 1,
    nome: "BBB 1",
    ano: 2002,
    participantes: 12,
    campeao: "Kleber Bambam",
    apresentador: "Pedro Bial",
    imagem: bbb1,
  },
  {
    id: 2,
    nome: "BBB 2",
    ano: 2002,
    participantes: 12,
    campeao: "Rodrigo “Cowboy”",
    apresentador: "Pedro Bial",
    imagem: bbb2,
  },
  {
    id: 3,
    nome: "BBB 3",
    ano: 2002,
    participantes: 12,
    campeao: "Dhomini Ferreira",
    apresentador: "Pedro Bial",
    imagem: bbb3,
  },
  {
    id: 4,
    nome: "BBB 4",
    ano: 2002,
    participantes: 12,
    campeao: "Cida Santos",
    apresentador: "Pedro Bial",
    imagem: bbb4,
  },
  {
    id: 5,
    nome: "BBB 5",
    ano: 2002,
    campeao: "Jean Wyllys",
    apresentador: "Pedro Bial",
    imagem: bbb5,
  },
  {
    id: 6,
    nome: "BBB 6",
    ano: 2002,
    participantes: 12,
    campeao: "Mara Viana",
    apresentador: "Pedro Bial",
    imagem: bbb6,
  },

];

const BBBCarrossel = () => {
  const [ativo, setAtivo] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setAtivo((prev) => (prev + 1) % edicoes.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const card = container.children[ativo];

    if (card) {
      card.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [ativo]);

  return (
    <section className="secao carrosselBBB">
      <h2 className="secaoTitulo">Edições do BBB</h2>

      <div className="carrosselContainer" ref={containerRef}>
        {edicoes.map((edicao, index) => (
          <div
            key={edicao.id}
            className={`cardEdicao ${index === ativo ? "ativo" : ""}`}
            style={{ backgroundImage: `url(${edicao.imagem})` }}
          >

            <div className="overlay" />

            <div className="cardConteudo">
              <h3>{edicao.nome}</h3>
              <div className="metaLinha">
                <span>
                  <Calendar size={14} />
                  {edicao.ano}
                </span>
                <span>
                  <Users size={14} />
                  {edicao.participantes} participantes
                </span>
              </div>


              <div className="infoLinha">
                <div className="campeao">
                  <Crown size={18} />
                  <span>{edicao.campeao}</span>
                </div>

                <div className="apresentadorTag">
                  <Mic size={14} />
                  <span>{edicao.apresentador}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BBBCarrossel;
