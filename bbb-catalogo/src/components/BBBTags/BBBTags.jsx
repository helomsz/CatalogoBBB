import { Leaf, Star, Flame, Heart, Brain, Tv } from "lucide-react";
import "./BBBTags.css";

const BBBTags = () => {
    return (
        <section className="secao bbbTags">

            <div className="bbbTagsContainer">
                <div className="bbbTag planta">
                    <Leaf size={18} />
                    <span>Planta</span>
                </div>

                <div className="bbbTag protagonista">
                    <Star size={18} />
                    <span>Protagonista</span>
                </div>

                <div className="bbbTag treta">
                    <Flame size={18} />
                    <span>Treta</span>
                </div>

                <div className="bbbTag favorito">
                    <Heart size={18} />
                    <span>Favorito do público</span>
                </div>

                <div className="bbbTag estrategia">
                    <Brain size={18} />
                    <span>Estrategista</span>
                </div>

                <div className="bbbTag vtzeiro">
                    <Tv size={18} />
                    <span>Vtzeiro</span>
                </div>

            </div>
        </section>
    );
};

export default BBBTags;
