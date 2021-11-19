

import { useEffect } from "react";
import { Language } from "../../store/interfaces";
import './PersonalEnergies.css'
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store";
 

export function PersonalEnergies(lang: Language): JSX.Element{
    
    const dispatch = useDispatch();


    useEffect(() => {
    })    

 

    return(
        <div>
        
            <div className="PersonalEnergies-FlexContainer">
                <div className="PersonalEnergies-Description">
                <h2>{lang.sections.energy.PersonalEnergies_h2}</h2>
                <p>{lang.sections.energy.PersonalEnergies_pp}</p>
                </div>
            </div>
        </div>
    )
       
}