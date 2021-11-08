//For fetching specific coins, etc.
import React from "react";
import { useDispatch } from 'react-redux';

export default class CoinsGetter extends React.Component {
    
    conList;
    vals;
    hashEfficiency;
    url;
    loger;
    parsedCoinList;
    dispatch;

    constructor(){
        super();
        this.coinlist = {
            coins: "BTC,ETH,BCH,BSV,LTC,XMR,DASH,ETC,ZEC,DOGE,BTG,DCR,RVN,MONA,BTM,SC,DGB,ZEN,KMD,BCN",
            algs: "SHA-256,Scrypt,X11,Equihash,Blake,Tensority,Sia,CryptoNight,Lyra2REv2"
        };
    
        //For selecting different JSON properties
        this.vals = ["coin","algorithm","network_hashrate","rated-power"]
    
        this.hashEfficiency = {"SHA-256":25300000000,"Scrypt":827000,"X11":12200000,"Equihash":90,"Blake":18900000000,"Tensority":182,"Sia":1220000000,"CryptoNight":500,"Lyra2REv2":11700000};
    
        //URL to fetch from
        this.url = "https://api.minerstat.com/v2/coins";

        this.dispatch = useDispatch();

    }
    

    setCoins(coins){
        dispatch(this.setCoins(coins));
    }

    componentDidMount(){
        fetch(this.url+"?list="+this.coinlist.coins)
            .then(response => response.json())
            .then(json => this.fetchingDat(json))
    }
    
    //Fetches the data
    fetchingDat(data) {
        
        //Print all the coins with all data that was taken
        var logger = ""; //String to build output

        var parsedCoinList = {};
        var buildObj;

        for(const i in Object.keys(data))
        {
            buildObj = new Object();
            if("coin" in data[i])
            {
                buildObj["coin"] = data[i]["coin"];
            }
            else
            {
                buildObj["coin"] = "NULL"
            }
            if("network_hashrate" in data[i])
            {
                buildObj["network_hashrate"] = data[i]["network_hashrate"];
            }
            else
            {
                buildObj["network_hashrate"] = -1;
            }
            if("algorithm" in data[i] && data[i]["algorithm"] in this.hashEfficiency)
            {
                buildObj["algorithm"] = data[i]["algorithm"];
                if(data[i]["algorithm"] in this.hashEfficiency && data[i]["network_hashrate"] != -1)
                {
                    buildObj["rated-power"]=(data[i]["network_hashrate"] / this.hashEfficiency[data[i]["algorithm"]]) / 1000000000 ;
                }
                else
                {
                    buildObj["rated-power"] = -1;
                }
            }
            else if("algorithm" in data[i])
            {
                buildObj["algorithm"] = data[i]["algorithm"];
                buildObj["rated-power"] = -1;
            }
            else
            {
                buildObj["rated-power"] = -1;
                buildObj["algorithm"] = "NULL";
            }
            parsedCoinList[i] = buildObj;
        }

        //For each key given in the coin
        for(const i in Object.keys(data))
        {
            //Build identifier to output string
            logger += "\nCoin "+i;

            for(const j in this.vals)
            {
                logger+="\n\t"+this.vals[j]+":\t"+parsedCoinList[i][this.vals[j]];
            }
        
        }
        return parsedCoinList;
    }
}