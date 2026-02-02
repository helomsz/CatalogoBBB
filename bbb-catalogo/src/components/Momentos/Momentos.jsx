import "./Momentos.css";
import { Camera, Heart, Sparkles } from "lucide-react";

import vitorhugo from '../../assets/momentos/vitorhugoabracando.jpg'
import solCantando from '../../assets/momentos/sol-cantando.png'
import kerlineChorando from '../../assets/momentos/kerline-bbb.gif'
import karolLingua from '../../assets/momentos/karol-conka-lingua.gif'
import lumena from '../../assets/momentos/jealousofurlove-lumena.gif'
import natalia from '../../assets/momentos/natalia_depois_que_maria_acertou_o_balde.jpeg'
import beatriz from '../../assets/momentos/beatriz-bbb.gif'
import aline from '../../assets/momentos/aline.gif'
import projota from '../../assets/momentos/projota.png'
import mariaEugenia from '../../assets/momentos/mariaEugenia.gif'
import lucas from '../../assets/momentos/lucas-bbb.gif'
import naiara from '../../assets/momentos/anny-gifs-naiara-azevedo.gif'


const momentos = [
  {
    id: 1,
    titulo: "Kerline chorando",
    ano: 2021,
    descricao: "Momento em que Kerline ficou emotiva e começou a chorar na casa, com expressões que viraram meme.",
    imagem: kerlineChorando,
  },
  {
    id: 2,
    titulo: "Uma faca desse tamanho",
    ano: 2020,
    descricao: "Momento hilário em que Projota supostamente segurou a faca e virou meme no twitter.",
    imagem: projota,
  },
  {
    id: 3,
    titulo: "IARNOUOU",
    ano: 2004,
    descricao: "Momento icônico em que Sol cantou a música We Are the World, durante uma prova de resistência.",
    imagem: solCantando,
  },
  {
    id: 4,
    titulo: "Bambam & Maria Eugênia",
    ano: 2002,
    descricao: "Momento em que Banban se apegou à boneca que criou, a Maria Eugênia.",
    imagem: mariaEugenia,
  },
  {
    id: 5,
    titulo: "Ressignificando informações",
    ano: 2021,
    descricao: "Lumena caminhando pelo gramado apontando o dedo e dando lacrada na Juliette.",
    imagem: lumena ,
  },
  {
    id: 6,
    titulo: "Vitor Hugo brilhando",
    ano: 2020,
    descricao: "Vitor Hugo abraçando dois grupos ao mesmo tempo… e ninguém devolvendo o abraço.",
    imagem: vitorhugo,
  },
  {
    id: 7,
    titulo: "Aline quebrando tudo",
    ano: 2026,
    descricao: "Aline Campos (ex-riscado), quebrando tudo e mostrando seus talentos na dança.",
    imagem: aline,
  },
  {
    id: 8,
    titulo: "Língua de chicote",
    ano: 2020,
    descricao: "Mamacita mostrando que sua língua é afiada igual a um chicote.",
    imagem: karolLingua,
  },
  {
    id: 9,
    titulo: "Biquíni de banana",
    ano: 2024,
    descricao: "Bia do Brás levando um fecho depois de fazer um biquíni com a casca de banana.",
    imagem: beatriz,
  },
  {
    id: 10,
    titulo: "Sorriso sensual",
    ano: 2020,
    descricao: "Lucas dando um sorriso naturalmente sensual, após horas de prova de resistência.",
    imagem: lucas,
  },
  {
    id: 11,
    titulo: "Nem doeu",
    ano: 2020,
    descricao: "Natália bem tranquila após levar um  leve balde de água na cabeça durante o sincerão.",
    imagem: natalia,
  },
  {
    id: 12,
    titulo: "Delicada como uma flor",
    ano: 2020,
    descricao: "Naiara Azevedo comendo sua comida, de forma amena, singela e extremamente elegante!",
    imagem: naiara,
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
              <img src={momento.imagem} alt={momento.titulo} />
            </div>

            <div className="momento-content">

              <div className="linhaCard">
                <div className="tituloComIcone">
                  <span className="icon-glass">
                    <Sparkles size={14} />
                  </span>

                  <h3>{momento.titulo}</h3>
                </div>

                <p className="anoMomento">{momento.ano}</p>
              </div>


              <p>{momento.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
