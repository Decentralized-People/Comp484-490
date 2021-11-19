import React from "react"
import { Typography, Tabs } from 'antd';
import './CarbonEmissions.css'
import { Language } from "../store/interfaces";
import { WorldCarbonEmissionsMap } from "./graphs/WorldCarbonEmissionsMap";
import { SiberianGlobalWarming } from "./sections/SiberianGlobalWarming";
import { CarbonConclusion } from "./sections/CarbonConclusion";
import { CarbonIntro } from "./sections/CarbonIntro";
import ReactPlayer from "react-player";

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
                <div className="Video-container">
                    <ReactPlayer
                        className="videoTag-desktop"
                        playing={true}
                        loop={true}
                        moot={true}
                        height="100vh"
                        width="100vw"
                        config={{
                        file: {
                            attributes: {
                            style: {
                                zIndex: "100",
                                objectFit: "cover",
                            },
                            },
                        },
                        }}
                        url={'https://youtu.be/YRBDk8kFAw8'}
                    />
                    <div className="intro">
                    <h1 className="intro-title">{lang.header.carbon_emissions}</h1>
                        <h6 className="intro-links">{lang.others.video}</h6>
                     </div>
                </div>
            <div className="Main-text">
                    <div className="CarbonEmissions-body">
                        <CarbonIntro {...lang}></CarbonIntro>
                        <WorldCarbonEmissionsMap {...lang}></WorldCarbonEmissionsMap>
                        <p>{lang.sections.carbon_emissions.SiberianGlobalWarming}</p>
                        <SiberianGlobalWarming {...lang}></SiberianGlobalWarming>
                        <CarbonConclusion {...lang}></CarbonConclusion>  
                    </div>
                </div>
            </div>
        </>
    )
}