

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
    const url = "https://carbonintensity.org.uk/";


    useEffect(() => {

        fetchURL(url)


        async function updateMap(){


            // Get data from the link
            //const $ = await fetchURL(url);

           fetchURL(url)

            // Get the map part from the data
            //let newMap: string = $(".cookie-paragraph").html();

            // alert($)

            // // Set new map
            // dispatch(saveMap($||"Error.")); 
        
        }
    })    

    async function fetchURL(url: string) {
        const data =  await axios.get(url)
            .then(response => {
                const $ = cheerio.load(response.data);
                return $;
            })
            .catch(error => {
                console.log(error)})
        console.log(data)
    }

    function saveMap(map: string){
        dispatch({type: "UPDATE_UKMAP", payload: map});
    }

    return(
        <div>
            <div className="Uk-carbon-graph-container">
                {ReactHtmlParser(map)}
            </div>
        </div>
    )
       
}