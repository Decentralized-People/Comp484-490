import React from "react"
import { Typography, Tabs } from 'antd';
import './EWaste.css'
import { Language } from "../store/interfaces";
import { RecycleGraph } from "./graphs/RecycleGraph";
import ReactPlayer from "react-player";

export function EWaste(lang: Language){
    return(
        <>
            {/* <div className="Ewaste-body-left">
                <Tabs tabPosition="left" className="Ewaste-tabs">
                    <Tabs.TabPane tab={lang.side_bar.tab1} key="1">
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={lang.side_bar.tab2} key="2">
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={lang.side_bar.tab3} key="3">
                    </Tabs.TabPane>
                </Tabs>
            </div> */}
            <div className="Ewaste-body-right">
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
                        url={'https://youtu.be/ZZCkn6UIfL8'}
                    />
                    <div className="intro">
                    <h1 className="intro-title">{lang.header.e_waste}</h1>
                        <h6 className="intro-links">{lang.others.video}</h6>
                    </div>
                </div>
            <div className="Main-text">
                    <RecycleGraph {...lang}> </RecycleGraph>
                    <div className="Ewaste-map-flex-container">
                        <div className="Ewaste-map-labels-container">
                            <div className="Ewaste-map-labels"><a className="Ewaste-blockRed">&#9607;</a>{lang.sections.e_waste.Legend1}</div>
                            <div className="Ewaste-map-labels"><a className="Ewaste-blockGreen">&#9607;</a> {lang.sections.e_waste.Legend2}</div>
                            <div className="Ewaste-map-labels"><a className="Ewaste-blockGreenYellow">&#9607;</a> {lang.sections.e_waste.Legend3}</div>
                        </div>
                        <p className="recycle-map-description">
                           {lang.sections.e_waste.MapDescription}
                        </p>
                    </div>
                    
                    <p className="">{lang.sections.e_waste.p1}
                    </p>
                    <p>{lang.sections.e_waste.p2}</p>
                    <p>{lang.sections.e_waste.p3}</p>
                    <a href="https://www.bbc.com/news/technology-58572385">{lang.sections.e_waste.href1}</a>
                    <a href="https://www.epa.gov/international-cooperation/cleaning-electronic-waste-e-waste">{lang.sections.e_waste.href2}</a>
                    <a href="https://cen.acs.org/environment/sustainability/Bitcoin-poses-major-electronic-waste/97/i11">{lang.sections.e_waste.href3}</a>
                    <a href="https://www.journals.elsevier.com/resources-conservation-and-recycling">{lang.sections.e_waste.href4}</a>
                </div>
            </div>
        </>
    )

}