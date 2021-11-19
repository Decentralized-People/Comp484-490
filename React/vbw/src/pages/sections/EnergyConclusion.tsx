

import { useEffect } from "react";
import { Language } from "../../store/interfaces";
import './InfraEnergies.css'
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store";
 

export function EnergyConclusion(lang: Language): JSX.Element{
    
    const dispatch = useDispatch();


    useEffect(() => {
    })    

 

    return(
        <div>
        
            <div className="EnergyConclusion-FlexContainer">
                <div className="EnergyConclusion-Description">
                <h2>{lang.sections.energy.EnergyConclusion_h2}</h2>
                <p>{lang.sections.energy.EnergyConclusion_p}</p>
                </div>
            </div>
        </div>
    )
       
}