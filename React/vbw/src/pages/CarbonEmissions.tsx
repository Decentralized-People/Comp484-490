import React from "react"
import { Typography, Tabs } from 'antd';
import './CarbonEmissions.css'
import { Language } from "../store/interfaces";
import { WorldCarbonEmissionsMap } from "./graphs/WorldCarbonEmissionsMap";
import { SiberianGlobalWarming } from "./sections/SiberianGlobalWarming";
import { CarbonConclusion } from "./sections/CarbonConclusion";
import { CarbonIntro } from "./sections/CarbonIntro";

export function CarbonEmissions(lang: Language){
    return(
        <>
            {/* <div className="CarbonEmissions-body-left">
                <Tabs tabPosition="left" className="CarbonEmissions-tabs">
                    <Tabs.TabPane tab={lang.side_bar.tab1} key="1">
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={lang.side_bar.tab2} key="2">
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={lang.side_bar.tab3} key="3">
                    </Tabs.TabPane>
                </Tabs>
            </div> */}
            <div className="CarbonEmissions-body-right">
                <div className="CarbonEmissions-body">
                    <CarbonIntro {...lang}></CarbonIntro>
                    <WorldCarbonEmissionsMap {...lang}></WorldCarbonEmissionsMap>
                    <p>We hear the temperature increases every year and the ocean becomes more acidic. The biggest contribution to these causes is the excess carbon dioxide emission that is produced by us. So this brings the questions: why is it important for us to be aware of our carbon footprint and is carbon itself harmful? To break it into simple terms carbon is one of the most common elements it is everywhere in our body, air, etc. Plants used carbon dioxide to produce oxygen as a part of the cycle that supports life on earth. But what we humans are doing is producing excess carbon into the atmosphere. This can cause extreme weather changes, for example Siberia. It was the first time in 150 years in history. </p>
                    <SiberianGlobalWarming {...lang}></SiberianGlobalWarming>
                    <CarbonConclusion {...lang}></CarbonConclusion>  
                </div>
            </div>
        </>
    )
}