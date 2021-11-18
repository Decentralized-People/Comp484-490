

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
                <h1>Translating Energy Consumption into Carbon Emission</h1>
                <p>Another way that we can view this data is with the viewpoint of carbon emissions. Consider the graphs below showing global carbon emissions from fossil fuels.</p>
                </div>
            </div>
        </div>
    )
       
}