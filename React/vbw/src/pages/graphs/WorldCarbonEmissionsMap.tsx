

import { useEffect } from "react";
import { Language } from "../../store/interfaces";
import './CarbonGraphUK.css'
import { useDispatch } from "react-redux";
import { ResponsiveChoropleth } from '@nivo/geo'

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

    const CarbonEmmisionsByYear: CarbonEmissionsGraphData[] = toGraphData(CarbonEmissions, 2020);

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

    console.log(CarbonEmmisionsByYear)
    
    useEffect(() => {

    })  

    return(
        <div>
            <h1>Choropleth</h1>
            <div className="WorldCarbonEmissionsMap-graph-container">
                <ResponsiveChoropleth
                    data={CarbonEmmisionsByYear}
                    features={features}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    colors="reds"
                    domain={[ 0, 100000000 ]}
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
        </div>
    )
       
}