

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
                <h2>Cryptocurrency and Energy Consumption</h2>
                <p>Cryptocurrency exists as an alternative to traditional money (also called fiat currency), and comes in the form of digital "coins" (or tokens, which are derivatives of coins). The first cryptocurrency, Bitcoin, was created in 2009 in an effort to decentralize money, thus freeing it from the rule of banks and governments. This enables international transactions and removes middle-men, making transfer cheaper and more efficient. However, without the blockchain, cryptocurrency does not exist. The blockchain is a public yet immutable database, also known as a digital ledger. The data is distributed over a swarm of computers that serve as fact-checkers of the ledger. This allows the blockchain to be unbiased and trustworthy, as it is upheld by the public rather than a small group. Crypto holds value in a slightly different way than traditional money, since it is not backed by anything physical. Its value comes from its utility, such as international transfers, trade, financial freedom, and staking (earning interest for holding coins). Cryptocurrency has gained a lot of popularity as of late, possibly for good reason. However, that does not mean there is no cost. Following the methodologies of [inset the name of the paper here], we can show how many resources are dedicated to them.</p>
                <p> Cryptocurrencies are typically decentralized and rely on communal transaction validation. Computers that are dedicated to validating crypto transactions, called "miners", spend hours processing these transactions. Using APIs that track global crypto activity, we use a statistic called the "hashrate" to track the computations required to validate each transaction. The hashrate refers to the number of attempts to validate a transaction, given in units hashes per second. Depending on the algorithm that the coin uses for validation, we can apply a conversion from hashrates into "rated power", a rough estimate of how much energy is consumed by the existence of the coin. So, given the top 20 crypto currencies, we can show just how much cryptocurrencies could harm the enviornment. Consider the following hash rates for the top 20 coins:</p>
                </div>
                <CoinGraph {...lang}></CoinGraph>
            </div>
        </div>
    )
       
}