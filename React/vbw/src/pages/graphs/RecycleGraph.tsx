

import { useEffect } from "react";
import { Language } from "../../store/interfaces";
import './RecycleGraph.css'
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store";
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';
import cheerio from 'cheerio';

export function RecycleGraph(lang: Language): JSX.Element{
    const dispatch = useDispatch();
    const map = useTypedSelector((state) => state.reducers.ukMAP);
    const url = "https://eridirect.com/sustainability/us-legislation/";
    const className = "#map_base"

    useEffect(() => {
        fetchURL(url)

    })    

    async function fetchURL(url: string) {
        const data =  await axios.get(url)
            .then(response => {
                const $ = cheerio.load(response.data);
                dispatch(saveMap($(className).html()||"Error while extracting data..."));
            })
            .catch(error => { console.log(error) })
        console.log(data)
    }

    function saveMap(map: string){
        dispatch({type: "UPDATE_UKMAP", payload: map});
    }

    return(   
        <iframe 
            className="Ewaste-iframe-map" id="recycle-map" scrolling="yes"
            src="https://eridirect.com/sustainability/us-legislation/#map_base" 
            title="State E-Waste Legislation in the U.S.">
        </iframe> 
    )
       
}