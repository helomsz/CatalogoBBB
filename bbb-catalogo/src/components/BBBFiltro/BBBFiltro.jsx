import { useState } from "react";
import BBBTags from "../BBBTags/BBBTags";
import Participantes from "../Participantes/Participantes";
import Navbar from "../Nav/Nav";

export default function BBBFiltro() {
  const [filtro, setFiltro] = useState(null);
  const [favoritos, setFavoritos] = useState([]);

  const handleSelectTag = (tag) => {
    setFiltro(prev => (prev === tag ? null : tag));
  };

  const toggleFavorito = (id) => {
    setFavoritos(prev =>
      prev.includes(id)
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      <Navbar quantidadeFavoritos={favoritos.length} />
      <BBBTags onSelectTag={handleSelectTag} />
      <Participantes
        filtro={filtro}
        favoritos={favoritos}
        toggleFavorito={toggleFavorito}
      />
    </>
  );
}
