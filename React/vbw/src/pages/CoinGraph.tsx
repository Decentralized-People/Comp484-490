

import React, { useEffect } from "react";
import { Typography, Tabs } from 'antd';
import './Energy.css'
import { Language } from "../store/interfaces";

export function CoinGraph(lang: Language): JSX.Element{


    useEffect(() => {


        interface CoinsAlgs{
            coins: string;
            algs: string;
        }

        interface HashEfficiency{
            SHA256: number;
            Scrypt: number;
            X11: number;
            Equihash: number;
            Blake: number
            Tensority: number;
            Sia: number;
            CryptoNight: number;
            Lyra2REv2: number;
        }

        const coinlist: CoinsAlgs = {
            coins: "BTC,ETH,BCH,BSV,LTC,XMR,DASH,ETC,ZEC,DOGE,BTG,DCR,RVN,MONA,BTM,SC,DGB,ZEN,KMD,BCN",
            algs: "SHA-256,Scrypt,X11,Equihash,Blake,Tensority,Sia,CryptoNight,Lyra2REv2"
        };

        //For selecting different JSON properties
        const vals = ["coin","algorithm","network_hashrate","rated-power"]

        const hashEfficiency: HashEfficiency = {
            "SHA256":25300000000,
            "Scrypt":827000,
            "X11":12200000,
            "Equihash":90,
            "Blake":18900000000,
            "Tensority":182,
            "Sia":1220000000,
            "CryptoNight":500,
            "Lyra2REv2":11700000};

        //URL to fetch from
        const url = "https://api.minerstat.com/v2/coins";

        function fetchData(data: any){
            data.forEach((element: { coin: any; }) => {
                let coin = element.coin;
        }

        async function getData(){         
            fetch(url)
            .then(response => response.json())
            .then(data => {console.log(data)})
            .then(data => {fetchData(data)})
            .catch(error => console.log(error));
            
        }

        getData();

    })
    return(
        <div>
            hello
        </div>
    )
}