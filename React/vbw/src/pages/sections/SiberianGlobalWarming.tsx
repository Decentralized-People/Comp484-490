

import { useEffect } from "react";
import { Language } from "../../store/interfaces";
import './SiberianGlobalWarming.css'
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store";
import YouTube from 'react-youtube'
 

export function SiberianGlobalWarming(lang: Language): JSX.Element{ 

    return(        
        <div className="SiberianGlobalWarming">
            <div className="SiberianGlobalWarming-FlexContainer">
                <div className="SiberianGlobalWarming-Description">
                    <h1>{lang.sections.carbon_emissions.SiberianGlobalWarming_h1}</h1>
                    <h2>{lang.sections.carbon_emissions.SiberianGlobalWarming_h2}</h2>
                    <ul>
                        <li>
                            {lang.sections.carbon_emissions.SiberianGlobalWarming_li1}
                        </li>
                        <li>
                            {lang.sections.carbon_emissions.SiberianGlobalWarming_li2}
                        </li>
                        <li>
                            {lang.sections.carbon_emissions.SiberianGlobalWarming_li3}
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