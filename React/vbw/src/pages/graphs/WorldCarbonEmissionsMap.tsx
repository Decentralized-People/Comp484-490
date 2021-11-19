

import { useEffect } from "react";
import { Language } from "../../store/interfaces";
import { ResponsiveChoropleth } from '@nivo/geo'
import { ResponsiveBar } from '@nivo/bar'

import JSON from "../../assets/data/world_carbon_emissions.json";
import mapCoordinates from "../../assets/data/world_map_coordinates.json";
import './WorldCarbonEmissionsMap.css';




export function WorldCarbonEmissionsMap(lang: Language): JSX.Element{

    interface CarbonEmissionsElement {
        Entity: string;
        Code: string;
        Year: number;
        AnnualCO2Emissions: number;
    }

    interface CarbonEmissionsGraphData{
        id: string;
        value: number;
    }

    interface CarbonEmissionsBARGraphData{
        year: number;
        carbon: number;
    }

    interface featuresInterface {
        type: string;
        properties: {
            name: string;
        };
        geometry: {
            type: string;
            coordinates: number[][][][] | number[][][];
        };
        id: string;   
    }

    const features: featuresInterface[] = mapCoordinates.features

    const CarbonEmissions: CarbonEmissionsElement[] = JSON;

    function toGraphData(list: CarbonEmissionsElement[], year: number): CarbonEmissionsGraphData[] {
        return (
            list
                .filter((element) => element.Code !== "" && element.Year === year)
                .map((element: CarbonEmissionsElement) => {
                return {
                    id: element.Code,
                    value: element.AnnualCO2Emissions
                }
        }))
    }

    function toBarGraphData(list: CarbonEmissionsElement[]): CarbonEmissionsBARGraphData[] {

        const carbon: CarbonEmissionsBARGraphData[] = [];
        
        for (let i = 0; i < 73; i++) {
            const year: CarbonEmissionsBARGraphData = {
                year: i + 1949,
                carbon: 0
            }
            carbon.push(year);
        }

        console.log(carbon);
        list.map((element: CarbonEmissionsElement) => {
            if(element.Code !== "" && element.Year >= 1949 && element.Year <= 2020){
                carbon[element.Year - 1949].carbon += element.AnnualCO2Emissions;
            }
        })

        return carbon;
    }

    const barData = toBarGraphData(CarbonEmissions);

    console.log(barData);
    
    useEffect(() => {

    })  

    return(
        <div>
            <div className="WorldCarbonEmissionsMap-graph-container">
                <ResponsiveChoropleth
                    data={toGraphData(CarbonEmissions, 2020)}
                    features={features}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    colors="reds"
                    domain={[ 0, 750000000 ]}
                    unknownColor="#ffffff"
                    label="properties.name"
                    valueFormat=".2s"
                    projectionTranslation={[ 0.5, 0.5 ]}
                    projectionRotation={[ 0, 0, 0 ]}
                    enableGraticule={true}
                    graticuleLineColor="rgba(0, 0, 0, .2)"
                    borderWidth={0.75}
                    borderColor="#101b42"
                    legends={[
                        {
                            anchor: 'bottom-left',
                            direction: 'column',
                            justify: true,
                            translateX: 20,
                            translateY: -100,
                            itemsSpacing: 0,
                            itemWidth: 94,
                            itemHeight: 18,
                            itemDirection: 'left-to-right',
                            itemTextColor: '#444444',
                            itemOpacity: 0.85,
                            symbolSize: 18,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000000',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    />

            </div>
            <div style={{height:400,width:1200}} className="WorldCarbonEmissionsMap-graph-container">
                <ResponsiveBar
                    data={barData.map((element: CarbonEmissionsBARGraphData) => {
                        return {
                            Year: element.year.toString(),
                            Carbon: element.carbon
                        }
                    })}
                    keys={['Carbon']}
                    indexBy="Year"
                    margin={{ top: 50, right: 130, bottom: 50, left: 100 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={{ scheme: 'nivo' }}
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: '#38bcb2',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: '#eed312',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ]}
                    fill={[
                        {
                            match: {
                                id: 'fries'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'sandwich'
                            },
                            id: 'lines'
                        }
                    ]}
                    borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 90,
                        legend: lang.sections.carbon_emissions.CarbonMapYear,
                        legendPosition: 'middle',
                        legendOffset: 42
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: lang.sections.carbon_emissions.CarbonMapTons,
                        legendPosition: 'middle',
                        legendOffset: -90
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 120,
                            translateY: 0,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemDirection: 'left-to-right',
                            itemOpacity: 0.85,
                            symbolSize: 20,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    role="application"
                    ariaLabel="Nivo bar chart demo"
                    barAriaLabel={function (e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
                />
            </div>
        </div>
    )
}