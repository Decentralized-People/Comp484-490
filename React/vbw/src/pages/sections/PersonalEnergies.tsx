

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
                <h2>Personal Device Energy Consumption</h2>
                <p>The minimum infrastructure required by the internet alone contributes significant carbon emissions. Adding in personal devices like smartphones or laptops creates even more emissions on top of that. Each step in the lifecycle of a personal device necessitates energy consumption, creates waste, and emits greenhouse gases. Here are some more graphs:</p>
                </div>
            </div>
        </div>
    )
       
}