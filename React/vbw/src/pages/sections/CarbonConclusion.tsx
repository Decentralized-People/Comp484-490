

import { useEffect } from "react";
import { Language } from "../../store/interfaces";
import './InfraEnergies.css'
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store";
 

export function CarbonConclusion(lang: Language): JSX.Element{
    
    const dispatch = useDispatch();


    useEffect(() => {
    })    

 

    return(
        <div>
        
            <div className="CarbonConclusion-FlexContainer">
                <div className="CarbonConclusion-Description">
                <h2>{lang.sections.carbon_emissions.CarbonConclusion_h1}</h2>
                <p>{lang.sections.carbon_emissions.CarbonConclusion_p} 
                </p>
                </div>
            </div>
        </div>
    )
       
}