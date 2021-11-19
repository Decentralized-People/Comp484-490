

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
                <h2>Concluding Thoughts</h2>
                <p>In conclusion it is crucial for us to be more aware of our carbon footprint. It is difficult for us to go completely carbon neutral. One of the best ways we can combat the emission is to offset our carbon footprint. This means we need to find ways to negate the carbon footprint we leave individually. These could be small changes such as turning off lights when not being used. Buying second-hand items instead of buying new ones, especially electronics. Also shopping at companies who care about the environment and use environmentally friendly resources. 
                </p>
                </div>
            </div>
        </div>
    )
       
}