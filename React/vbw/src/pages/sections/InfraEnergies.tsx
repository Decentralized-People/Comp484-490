

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
                <h2>Internet Infrastructure Energy Consumption</h2>
                <p>The minimal enviornmental impact that the internet could possibly have would be related to the minimum infrastructure required to preserve a single state of the internet. This static "snapshot" of the internet would be equivalent to pausing internet usage across the world without removing the structures that support it, for future use. Consider the following chart:</p>
                </div>
            </div>
        </div>
    )
       
}