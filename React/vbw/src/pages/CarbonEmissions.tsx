import React from "react"
import { Typography, Tabs } from 'antd';
import './CarbonEmissions.css'
import { Language } from "../store/interfaces";
import { WorldCarbonEmissionsMap } from "./graphs/WorldCarbonEmissionsMap";

export function CarbonEmissions(lang: Language){
    return(
        <>
            <Tabs tabPosition="left" className="CarbonEmissions-tabs">
                <Tabs.TabPane tab={lang.side_bar.tab1} key="1">
                </Tabs.TabPane>
                <Tabs.TabPane tab={lang.side_bar.tab2} key="2">
                </Tabs.TabPane>
                <Tabs.TabPane tab={lang.side_bar.tab3} key="3">
                </Tabs.TabPane>
            </Tabs>
            <Typography.Title level={3} className="CarbonEmissions-text">
                {lang.sections.carbon_emissions.title}
                Global CO2 emissions from fossil fuels
                https://ourworldindata.org/co2-emissions
                <WorldCarbonEmissionsMap {...lang}></WorldCarbonEmissionsMap>
            </Typography.Title>
        </>
    )
}