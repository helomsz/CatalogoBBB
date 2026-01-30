import React from "react";
import './Participantes.css'
import Juliette from "../../assets/participantes/juliette.png"
import Babu from "../../assets/participantes/babu.png"
import Manu from "../../assets/participantes/manu.png"
import Davi from "../../assets/participantes/davi.png"
import Grazi from "../../assets/participantes/grazi.png"
import Karol from "../../assets/participantes/karol.png"
import Vanessa from "../../assets/participantes/vanessa.png"
import Vyni from '../../assets/participantes/vyni.png'
import Jade from "../../assets/participantes/jade.png"
import Sabrina from "../../assets/participantes/sabrina.png"
import Gil from "../../assets/participantes/gil.png"
import Ana from "../../assets/participantes/ana.png"
import { Leaf, Star, Flame, Heart, Brain, Tv } from "lucide-react";
import Favorito from "../Favoritos/Favoritos";

//define variavel para relacionar os participantes com as categorias para filtragem

export default function Participantes({ filtro }){
    return(
        <section className="secaoParticipantes">
            <div className="containerCards">
                <h2>Participantes</h2>
                <section className="cardsParticipantes">

                    <div className="primeiraLinha">
                        {(!filtro || filtro === "favorito") && (
                            <div>
                                <Favorito />
                                <img src={Juliette} alt="Card da participante Juliette" />
                                <div className="bbbTag favorito bbbTag--card">
                                    <Heart size={12} />
                                    <span>Favorito do público</span>
                                </div>
                            </div>
                        )}
                        {(!filtro || filtro === "treta") && (
                            <div>
                                <Favorito />
                                <img src={Ana} alt="Card do participante Ana Paula Renault"/>
                                <div className="bbbTag treta bbbTag--card">
                                    <Flame size={12} />
                                    <span>Treta</span>
                                </div>
                            </div>
                        )}
                        {(!filtro || filtro === "protagonista") && (
                            <div>
                                <Favorito />
                                <img src={Manu} alt="Card do participante Manu Gavassi"/>
                                <div className="bbbTag protagonista bbbTag--card">
                                    <Star size={12} />
                                    <span>Protagonista</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="segundaLinha">
                        {(!filtro || filtro === "treta") && (
                            <div>
                                <Favorito />
                                <img src={Davi} alt="Card da participante Davi Brito"/>
                                <div className="bbbTag treta bbbTag--card">
                                    <Flame size={12} />
                                    <span>Treta</span>
                                </div>
                            </div>
                        )}
                        {(!filtro || filtro === "treta") && (
                            <div>
                                <Favorito />
                                <img src={Karol} alt="Card do participante Karol Conká"/>
                                <div className="bbbTag treta bbbTag--card">
                                    <Flame size={12} />
                                    <span>Treta</span>
                                </div>
                            </div>
                        )}
                        {(!filtro || filtro === "protagonista") && (
                            <div>
                                <Favorito />
                                <img src={Grazi} alt="Card do participante Grazi Massafera"/>
                                <div className="bbbTag protagonista bbbTag--card">
                                    <Star size={12} />
                                    <span>Protagonista</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="terceiraLinha">
                        {(!filtro || filtro === "estrategia") && (
                            <div>
                                <Favorito />
                                <img src={Jade} alt="Card da participante Jade Picon"/>
                                <div className="bbbTag estrategia bbbTag--card">
                                    <Brain size={12} />
                                    <span>Estrategista</span>
                                </div>
                            </div>
                        )}
                        {(!filtro || filtro === "vtzeiro") && (
                            <div>
                                <Favorito />
                                <img src={Gil} alt="Card do participante Gil do Vigor"/>
                                <div className="bbbTag vtzeiro bbbTag--card">
                                    <Tv size={12} />
                                    <span>Vtzeiro</span>
                                </div>
                            </div>
                        )}
                        {(!filtro || filtro === "planta") && (
                            <div>
                                <Favorito />
                                <img src={Babu} alt="Card do participante Babu Santana"/>
                                <div className="bbbTag planta bbbTag--card">
                                    <Leaf size={12} />
                                    <span>Planta</span>
                                </div>
                            </div>
                            )}
                    </div>

                    <div className="quartaLinha">
                        {(!filtro || filtro === "favorito") && (
                            <div>
                                <Favorito />
                                <img src={Sabrina} alt="Card da participante Sabrina Sato"/>
                                <div className="bbbTag favorito bbbTag--card">
                                    <Heart size={12} />
                                    <span>Favorito do público</span>
                                </div>
                            </div>
                        )}
                        {(!filtro || filtro === "vtzeiro") && (
                            <div>
                                <Favorito />
                                <img src={Vyni} alt="Card do participante Vyni"/>
                                <div className="bbbTag vtzeiro bbbTag--card">
                                    <Tv size={12} />
                                    <span>Vtzeiro</span>
                                </div>
                            </div>
                        )}
                        {(!filtro || filtro === "planta") && (
                            <div>
                                <Favorito />
                                <img src={Vanessa} alt="Card do participante Vanessa Lopes"/>
                                <div className="bbbTag planta bbbTag--card">
                                    <Leaf size={12} />
                                    <span>Planta</span>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </section>

    )
}