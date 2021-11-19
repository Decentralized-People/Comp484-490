

import { useEffect } from "react";
import { Language } from "../../store/interfaces";
import './InfraEnergies.css'
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store";
 

export function InfraEnergies(lang: Language): JSX.Element{
    
    const dispatch = useDispatch();


    useEffect(() => {
    })    

 

    return(
        <div>
        
            <div className="InfraEnergies-FlexContainer">
                <div className="InfraEnergies-Description">
                <h2>{lang.sections.energy.InfraEnergies_h2}</h2>
                <p>{lang.sections.energy.InfraEnergies_p}</p>
                </div>
            </div>
        </div>
    )
       
}