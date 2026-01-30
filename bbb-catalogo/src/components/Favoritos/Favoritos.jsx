import { Heart } from "lucide-react";
import { useState } from "react";
import "./Favoritos.css";

export default function Favorito() {
  const [favorito, setFavorito] = useState(false);

  return (
    <button
      className={`favoritoBtn ${favorito ? "ativo" : ""}`}
      onClick={() => setFavorito(!favorito)}
      aria-label="Favoritar participante"
    >
      <Heart
        size={20}
        fill={favorito ? "#ffffffff" : "none"}
        color={favorito ? "#ffffffff" : "#ffffffff"}
      />
    </button>
  );
}
