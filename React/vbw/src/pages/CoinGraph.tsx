

import React, { useEffect } from "react";
import './Energy.css'
import { Language } from "../store/interfaces";
import { Coin } from "../store/interfaces";
import axios, { AxiosResponse } from 'axios';
import { useDispatch, useStore } from "react-redux";
import { useTypedSelector } from "../store";
import { ResponsivePie } from '@nivo/pie'


export function CoinGraph(lang: Language): JSX.Element{
    
    const dispatch = useDispatch();

    const coinsToPrint: Coin[] = useTypedSelector((state) => state.reducers.coins);

    interface ResponsivePieInterface {
        id: string;
        label: string;
        value: string;
        color: number;
    }
    
    const graphData: ResponsivePieInterface[] = coinsToPrint.map((coin: Coin) => {
        return {
            id: coin.coin,
            label: coin.coin,
            value: coin.ratedPower.toString(),
            color: coin.ratedPower
        }
    })
    
    // const MyResponsivePie = () => (
    //     <ResponsivePie
    //         data={graphData}
    //         margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    //         innerRadius={0.5}
    //         padAngle={0.7}
    //         cornerRadius={3}
    //         activeOuterRadiusOffset={8}
    //         borderWidth={1}
    //         borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
    //         arcLinkLabelsSkipAngle={10}
    //         arcLinkLabelsTextColor="#333333"
    //         arcLinkLabelsThickness={2}
    //         arcLinkLabelsColor={{ from: 'color' }}
    //         arcLabelsSkipAngle={10}
    //         arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
    //         defs={[
    //             {
    //                 id: 'dots',
    //                 type: 'patternDots',
    //                 background: 'inherit',
    //                 color: 'rgba(255, 255, 255, 0.3)',
    //                 size: 4,
    //                 padding: 1,
    //                 stagger: true
    //             },
    //             {
    //                 id: 'lines',
    //                 type: 'patternLines',
    //                 background: 'inherit',
    //                 color: 'rgba(255, 255, 255, 0.3)',
    //                 rotation: -45,
    //                 lineWidth: 6,
    //                 spacing: 10
    //             }
    //         ]}
    //         fill={[
    //             {
    //                 match: {
    //                     id: 'ruby'
    //                 },
    //                 id: 'dots'
    //             },
    //             {
    //                 match: {
    //                     id: 'c'
    //                 },
    //                 id: 'dots'
    //             },
    //             {
    //                 match: {
    //                     id: 'go'
    //                 },
    //                 id: 'dots'
    //             },
    //             {
    //                 match: {
    //                     id: 'python'
    //                 },
    //                 id: 'dots'
    //             },
    //             {
    //                 match: {
    //                     id: 'scala'
    //                 },
    //                 id: 'lines'
    //             },
    //             {
    //                 match: {
    //                     id: 'lisp'
    //                 },
    //                 id: 'lines'
    //             },
    //             {
    //                 match: {
    //                     id: 'elixir'
    //                 },
    //                 id: 'lines'
    //             },
    //             {
    //                 match: {
    //                     id: 'javascript'
    //                 },
    //                 id: 'lines'
    //             }
    //         ]}
    //         legends={[
    //             {
    //                 anchor: 'bottom',
    //                 direction: 'row',
    //                 justify: false,
    //                 translateX: 0,
    //                 translateY: 56,
    //                 itemsSpacing: 0,
    //                 itemWidth: 100,
    //                 itemHeight: 18,
    //                 itemTextColor: '#999',
    //                 itemDirection: 'left-to-right',
    //                 itemOpacity: 1,
    //                 symbolSize: 18,
    //                 symbolShape: 'circle',
    //                 effects: [
    //                     {
    //                         on: 'hover',
    //                         style: {
    //                             itemTextColor: '#000'
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]}
    //     />
    // )

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

    const MyResponsivePie = ( /* see data tab */ ) => (
        <ResponsivePie
            data={coinsToPrint}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'ruby'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'c'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'go'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'python'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'scala'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'lisp'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'elixir'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'javascript'
                    },
                    id: 'lines'
                }
            ]}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
    )

    return(
        <div>
            hey?
            <MyResponsivePie></MyResponsivePie>
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