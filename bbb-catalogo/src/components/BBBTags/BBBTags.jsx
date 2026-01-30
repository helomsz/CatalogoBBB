import { Leaf, Star, Flame, Heart, Brain, Tv } from "lucide-react";
import "./BBBTags.css";

const BBBTags = ({ onSelectTag }) => {
    console.log("onSelectTag:", onSelectTag);

  return (
    <section className="secao bbbTags">
      <div className="bbbTagsContainer">

        <div className="bbbTag planta" onClick={() => onSelectTag("planta")}>
          <Leaf size={18} />
          <span>Planta</span>
        </div>

        <div className="bbbTag protagonista" onClick={() => onSelectTag("protagonista")}>
          <Star size={18} />
          <span>Protagonista</span>
        </div>

        <div className="bbbTag treta" onClick={() => onSelectTag("treta")}>
          <Flame size={18} />
          <span>Treta</span>
        </div>

        <div className="bbbTag favorito" onClick={() => onSelectTag("favorito")}>
          <Heart size={18} />
          <span>Favorito do público</span>
        </div>

        <div className="bbbTag estrategia" onClick={() => onSelectTag("estrategia")}>
          <Brain size={18} />
          <span>Estrategista</span>
        </div>

        <div className="bbbTag vtzeiro" onClick={() => onSelectTag("vtzeiro")}>
          <Tv size={18} />
          <span>Vtzeiro</span>
        </div>

      </div>
    </section>
  );
};


export default BBBTags;
