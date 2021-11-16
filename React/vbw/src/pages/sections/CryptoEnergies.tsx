

import { useEffect } from "react";
import { Language } from "../../store/interfaces";
import './CryptoEnergies.css'
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store";
import { CoinGraph } from "../graphs/CoinGraph";
 

export function CryptoEnergies(lang: Language): JSX.Element{
    
    const dispatch = useDispatch();


    useEffect(() => {
    })    

 

    return(
        <div>
        
            <div className="CryptoEnergies-FlexContainer">
                <div className="CryptoEnergies-Description">
                <h1>Cryptocurrency and Energy Consumption</h1>
                <p>In finality, society creates usesless artifacts to hold value for temporary periods of time, until they move to the next. A current object of value that society obsess over is crytpocurrency. Following the methodologies of [inset the name of the paper here], we can show how many resources are dedicated to them.</p>
                <p> Cryptocurrencies are typically decentralized and rely on communal transaction validation. Computers that are dedicated to validating crypto transactions, called "miners", spend hours processing these transactions. Using APIs that track global crypto activity, we use a statistic called the "hashrate" to track the computations required to validate each transaction. The hashrate refers to the number of attempts to validate a transaction, given in units hashes per second. Depending on the algorithm that the coin uses for validation, we can apply a conversion from hashrates into "rated power", a rough estimate of how much energy is consumed by the existence of the coin. So, given the top 20 crypto currencies, we can show just how much cryptocurrencies could harm the enviornment. Consider the following hash rates for the top 20 coins:</p>
                </div>
                <CoinGraph {...lang}></CoinGraph>
            </div>
        </div>
    )
       
}