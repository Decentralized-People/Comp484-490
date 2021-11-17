

import { useEffect } from "react";
import { Language } from "../../store/interfaces";
import './SiberianGlobalWarming.css'
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store";
import YouTube from 'react-youtube'
 

export function SiberianGlobalWarming(lang: Language): JSX.Element{
    
    const dispatch = useDispatch();


    useEffect(() => {
    })    

 

    return(
        <div>
        
            <div className="SiberianGlobalWarming-FlexContainer">
                <div className="SiberianGlobalWarming-Description">
                <h1>Global warming in Siberia</h1>
                <h2>The result of carbon emissions?</h2>
                    <ul>
                        <li>
                            The temperature rising more than twice
                        </li>
                        <li>
                            22 million acres of wildfires (more than the size of Greece)
                        </li>
                        <li>
                            Ancient viruses threat
                        </li>
                    </ul>
                </div>
                <div className="SiberianGlobalWarming-YouTube-container">
                    <YouTube opts={{ width: '100%'}} videoId="Ig9BnTkmbco" />
                </div>
            </div>
        </div>
    )
       
}