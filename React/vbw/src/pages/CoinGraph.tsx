

import React, { useEffect } from "react";
import './Energy.css'
import { Language } from "../store/interfaces";
import { Coin } from "../store/interfaces";
import axios, { AxiosResponse } from 'axios';
import { useDispatch, useStore } from "react-redux";
import { useTypedSelector } from "../store";

export function CoinGraph(lang: Language): JSX.Element{
    
    const dispatch = useDispatch();

    const coinsToPrint: Coin[] = useTypedSelector((state) => state.reducers.coins);

    useEffect(() => {

        const coins: Coin[] = [];

        interface CoinData{
            algorithm: string;
            coin: string;
            difficulty: number;
            id: string;
            name: string;
            network_hashrate: number;
            price: number;
            reward: number;
            reward_block: number;
            reward_unit: string;
            type: string;
            updated: number;
            volume: number;
        };

        const coinList: Map<string, boolean> = new Map([
            ['BTC', true],
            ['ETH', true],
            ['BCH', true],
            ['BSV', true],
            ['LTC', true],
            ['XMR', true],
            ['DASH', true],
            ['ETC', true],
            ['ZEC', true],
            ['DOGE', true],
            ['BTG', true],
            ['DCR', true],
            ['RVN', true],
            ['MONA', true],
            ['BTM', true],
            ['SC', true],
            ['DGB', true],
            ['ZEN', true],
            ['KMD', true],
            ['BCN', true],
        ]);

        let hashEfficiency: Map<string, number> = new Map([
            ['SHA-256', 25300000000],
            ['Scrypt', 827000],
            ['X11', 12200000],
            ['Equihash', 90],
            ['Blake', 18900000000],
            ['Tensority', 182],
            ['Sia', 1220000000],
            ['CryptoNight', 500],
            ['Lyra2REv2', 11700000],
        ]);

        //URL to fetch from
        const url = "https://api.minerstat.com/v2/coins";

        function prepareData(data: CoinData[]){
            data.forEach(coin => {
                const coin_data: Coin = {
                    coin: coin.coin,
                    network_hashrate: coin.network_hashrate,
                    algorithm: coin.algorithm,
                    ratedPower: hashEfficiency.has(coin.algorithm) ? coin.network_hashrate * (hashEfficiency.get(coin.algorithm) || 0) / 1000000 : -1
                }
                coins.push(coin_data);
            });
            console.log(coins)
            saveCoins(coins);
        }

        function saveCoins(coins: Coin[]){
            dispatch({type: "SET_COINS", payload: coins});
        }

        async function fetchData(){         
            await axios.get(url).then((response: AxiosResponse<CoinData[]>) => {
                prepareData(response.data.filter(coin => coinList.has(coin.coin)));
            });
        }
        
        fetchData();

    })
    return(
        <div>
            {coinsToPrint.map(coin => {
                return(
                    <div>
                        <h5>{coin.coin}</h5>
                        <h5>{coin.algorithm}</h5>
                        <h5>{coin.ratedPower}</h5>
                        <br></br>
                    </div>
                )
            })} 
        </div>
    )
}