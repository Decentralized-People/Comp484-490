

import React, { useEffect } from "react";
import { Typography, Tabs } from 'antd';
import './Energy.css'
import { Language } from "../store/interfaces";
import { Coin } from "../store/interfaces";
import axios, { AxiosResponse } from 'axios';

export function CoinGraph(lang: Language): JSX.Element{


    useEffect(() => {

        const coins: Coin[] = [];

        interface CoinsAlgs{
            coins: string;
            algs: string;
        }

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

        const coinlist: CoinsAlgs = {
            coins: "BTC,ETH,BCH,BSV,LTC,XMR,DASH,ETC,ZEC,DOGE,BTG,DCR,RVN,MONA,BTM,SC,DGB,ZEN,KMD,BCN",
            algs: "SHA-256,Scrypt,X11,Equihash,Blake,Tensority,Sia,CryptoNight,Lyra2REv2"
        };

        //For selecting different JSON properties
        const vals = ["coin","algorithm","network_hashrate","rated-power"]

        let hashEfficiency = new Map<string, number>()

        hashEfficiency.set("SHA-256", 25300000000);
        hashEfficiency.set("Scrypt", 827000);
        hashEfficiency.set("X11", 12200000);
        hashEfficiency.set("Equihash", 90);
        hashEfficiency.set("Blake", 18900000000);
        hashEfficiency.set("Tensority", 182);
        hashEfficiency.set("Sia", 1220000000);
        hashEfficiency.set("CryptoNight", 500);
        hashEfficiency.set("Lyra2REv2", 11700000);
        

        //URL to fetch from
        const url = "https://api.minerstat.com/v2/coins";

        function fetchData(data: CoinData[]){
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
        }

        async function getData(){         
            await axios.get(url).then((response: AxiosResponse<CoinData[]>) => {
                fetchData(response.data);
            });
            
        }

        getData();

    })
    return(
        <div>
            hello
        </div>
    )
}