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
            <div className="CarbonEmissions-body-left">
                <Tabs tabPosition="left" className="CarbonEmissions-tabs">
                    <Tabs.TabPane tab={lang.side_bar.tab1} key="1">
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={lang.side_bar.tab2} key="2">
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={lang.side_bar.tab3} key="3">
                    </Tabs.TabPane>
                </Tabs>
            </div>
            <div className="CarbonEmissions-body-right">
                {lang.sections.carbon_emissions.title}
                Global CO2 emissions from fossil fuels
                https://ourworldindata.org/co2-emissions
                <CarbonIntro {...lang}></CarbonIntro>
                <WorldCarbonEmissionsMap {...lang}></WorldCarbonEmissionsMap>
                <SiberianGlobalWarming {...lang}></SiberianGlobalWarming>
                <CarbonConclusion {...lang}></CarbonConclusion>  
            </div>
        </>
    )
}