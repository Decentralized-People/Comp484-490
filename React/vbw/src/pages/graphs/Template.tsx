

import { useEffect } from "react";
import { Language } from "../../store/interfaces";
import './CarbonGraphUK.css'
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store";


export function Template(lang: Language): JSX.Element{
    
    const dispatch = useDispatch();


    useEffect(() => {
    })    

 

    return(
        <div>
            <div className="Template-graph-container">

            </div>
        </div>
    )
       
}