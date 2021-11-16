

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
                <h2>Concluding Thoughts</h2>
                <p>These are my concluding thoughts that I'll update</p>
                </div>
            </div>
        </div>
    )
       
}