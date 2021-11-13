

import { useEffect } from "react";
import { Language } from "../../store/interfaces";
import './CarbonGraphUK.css'
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store";
import ReactHtmlParser from 'react-html-parser';


export function UKCarbonGraph(lang: Language): JSX.Element{
    
    const dispatch = useDispatch();
    const map = useTypedSelector((state) => state.reducers.ukMAP);


    useEffect(() => {

        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const axios = require("axios");
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const cheerio = require("cheerio");

        updateMap()

        async function updateMap(){

            const url = "https://www.carbonintensity.org.uk/";

            // Get data from the link
            const $ = await fetchURL(url);

            // Get the map part from the data
            let newMap = $(".map").html();


            // Set new map
            dispatch(saveMap(newMap)); 
        }

        async function fetchURL(url: string) {
            const { data } = await axios.get(url);
            return cheerio.load(data);
        }

        function saveMap(map: string){
            dispatch({type: "UPDATE_UKMAP", payload: map});
        }
    })    

    
    return(
        <div>
            <div className="Uk-carbon-graph-container">
                {ReactHtmlParser(map)}
            </div>
        </div>
    )
        
}