

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
                <h1>Internet Energy Consumption</h1>
                <h2>Comparing Minimal, Personal, and Societal Impacts</h2>
                </div>
            </div>
        </div>
    )
       
}