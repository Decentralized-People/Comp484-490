

import { useEffect } from "react";
import { Language } from "../../store/interfaces";
import './InfraEnergies.css'
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store";
 

export function CarbonIntro(lang: Language): JSX.Element{
    
    const dispatch = useDispatch();


    useEffect(() => {
    })    

 

    return(
        <div>
        
            <div className="CarbonIntro-FlexContainer">
                <div className="CarbonIntro-Description">
                <h1>{lang.sections.carbon_emissions.CarbonIntro_h1}</h1>
                <p>{lang.sections.carbon_emissions.CarbonIntro_p}</p>
                </div>
            </div>
        </div>
    )
       
}