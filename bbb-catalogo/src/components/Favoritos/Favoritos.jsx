import { Heart } from "lucide-react";
import "./Favoritos.css";

export default function Favorito({ ativo, onClick }) {
  return (
    <button
      className={`favoritoBtn ${ativo ? "ativo" : ""}`}
      onClick={onClick}
      aria-label="Favoritar participante"
    >
      <Heart
        size={20}
        fill={ativo ? "#ffffff" : "none"}
        color="#ffffff"
      />
    </button>
  );
}
