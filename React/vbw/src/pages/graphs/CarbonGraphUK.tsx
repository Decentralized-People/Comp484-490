

import { useEffect } from "react";
import { Language } from "../../store/interfaces";
import './CarbonGraphUK.css'
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store";
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';
import cheerio from 'cheerio';

export function UKCarbonGraph(lang: Language): JSX.Element{
    
    const dispatch = useDispatch();
    const map = useTypedSelector((state) => state.reducers.ukMAP);

    useEffect(() => {

        updateMap()

        async function updateMap(){

            const url = "https://carbonintensity.org.uk/";

            // Get data from the link
            //const $ = await fetchURL(url);

            console.log(fetchURL(url))

            // Get the map part from the data
            //let newMap: string = $(".cookie-paragraph").html();

            // alert($)

            // // Set new map
            // dispatch(saveMap($||"Error.")); 
        
        }

        async function fetchURL(url: string) {
            return cheerio.load(await axios.get(url));
            //return cheerio.load(response.data);
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