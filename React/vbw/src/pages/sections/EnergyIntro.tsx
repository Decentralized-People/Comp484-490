

import { useEffect } from "react";
import { Language } from "../../store/interfaces";
import './EnergyIntro.css'
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store";
 

export function EnergyIntro(lang: Language): JSX.Element{
    
    const dispatch = useDispatch();


    useEffect(() => {
    })    

 

    return(
        <div>
        
            <div className="EnergyIntro-FlexContainer">
                <div className="EnergyIntro-Description">
                </div>
            </div>
        </div>
    )
       
}