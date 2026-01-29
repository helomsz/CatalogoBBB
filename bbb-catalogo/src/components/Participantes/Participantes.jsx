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

export default function Participantes(){
    return(
        <section className="secaoParticipantes">
            <div className="containerCards">
                <h2>Participantes</h2>
                <section className="cardsParticipantes">
                    <div className="primeiraLinha">
                        <img src={Juliette} alt="Card da participante Juliette"/>
                        <img src={Ana} alt="Card do participante Ana Paula Renault"/>
                        <img src={Manu} alt="Card do participante Manu Gavassi"/>
                    </div>
                    <div className="segundaLinha">
                        <img src={Davi} alt="Card da participante Davi Brito"/>
                        <img src={Karol} alt="Card do participante Karol Conká"/>
                        <img src={Grazi} alt="Card do participante Grazi Massafera"/>
                    </div>
                    <div className="terceiraLinha">
                        <img src={Jade} alt="Card da participante Jade Picon"/>
                        <img src={Gil} alt="Card do participante Gil do Vigor"/>
                        <img src={Babu} alt="Card do participante Babu Santana"/>
                    </div>
                    <div className="quartaLinha">
                        <img src={Sabrina} alt="Card da participante Sabrina Sato"/>
                        <img src={Vyni} alt="Card do participante Vyni"/>
                        <img src={Vanessa} alt="Card do participante Vanessa Lopes"/>
                    </div>
                </section>
            </div>
        </section>

    )
}