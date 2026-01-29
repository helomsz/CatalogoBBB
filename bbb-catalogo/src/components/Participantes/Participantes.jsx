import React from "react";
import './Participantes.css'
import Juliette from "../../assets/participantes/juliette.svg"
import Babu from "../../assets/participantes/babu.svg"
import Manu from "../../assets/participantes/manu.svg"
import Davi from "../../assets/participantes/davi.svg"
import Grazi from "../../assets/participantes/grazi.svg"
import Karol from "../../assets/participantes/karol.svg"
import Vanessa from "../../assets/participantes/vanessa.svg"
import Vyni from '../../assets/participantes/vyni.svg'
import Jade from "../../assets/participantes/jade.svg"


export default function Participantes(){
    return(
        <section className="secaoParticipantes">
            <div className="containerCards">
                <h2>Participantes</h2>
                <section className="cardsParticipantes">
                    <div className="primeiraLinha">
                        <img src={Juliette} alt="Card da participante Juliette"/>
                        <img src={Babu} alt="Card do participante Babu Santana"/>
                        <img src={Manu} alt="Card do participante Manu Gavassi"/>
                    </div>
                    <div className="segundaLinha">
                        <img src={Davi} alt="Card da participante Davi Brito"/>
                        <img src={Karol} alt="Card do participante Karol Conká"/>
                        <img src={Grazi} alt="Card do participante Grazi Massafera"/>
                    </div>
                    <div className="terceiraLinha">
                        <img src={Jade} alt="Card da participante Jade Picon"/>
                        <img src={Vyni} alt="Card do participante Vyni"/>
                        <img src={Vanessa} alt="Card do participante Vanessa Lopes"/>
                    </div>
                    <div className="quartaLinha">
                        <img src={Jade} alt="Card da participante Jade Picon"/>
                        <img src={Vyni} alt="Card do participante Vyni"/>
                        <img src={Vanessa} alt="Card do participante Vanessa Lopes"/>
                    </div>
                </section>
            </div>
        </section>

    )
}