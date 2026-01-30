import { useState } from "react";
import BBBTags from "../BBBTags/BBBTags";
import Participantes from "../Participantes/Participantes";

export default function BBBFiltro() {
  const [filtro, setFiltro] = useState(null);

  const handleSelectTag = (tag) => {
    setFiltro(prev => prev === tag ? null : tag);
  };

  return (
    <>
      <BBBTags onSelectTag={handleSelectTag} />
      <Participantes filtro={filtro} />
    </>
  );
}
