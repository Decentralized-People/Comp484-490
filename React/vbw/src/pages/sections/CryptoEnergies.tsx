

import { useEffect } from "react";
import { Language } from "../../store/interfaces";
import './CryptoEnergies.css'
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store";
import { CoinGraph } from "../graphs/CoinGraph";
 

export function CryptoEnergies(lang: Language): JSX.Element{
    
    const dispatch = useDispatch();


    useEffect(() => {
    })    

 

    return(
        <div>
        
            <div className="CryptoEnergies-FlexContainer">
                <div className="CryptoEnergies-Description">
                <h2>{lang.sections.energy.CryptoEnergies_h2}</h2>
                <p>{lang.sections.energy.CryptoEnergies_p}</p>
                <p>{lang.sections.energy.CryptoEnergies_p2}</p>
                </div>
                <CoinGraph {...lang}></CoinGraph>
            </div>
        </div>
    )
       
}