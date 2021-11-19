import { Tabs } from 'antd';
import './Energy.css'
import { Language } from "../store/interfaces";
import { CryptoEnergies } from "./sections/CryptoEnergies";
import { InfraEnergies } from "./sections/InfraEnergies";
import { PersonalEnergies } from "./sections/PersonalEnergies";
import { EnergyIntro } from "./sections/EnergyIntro";
import { EnergyConclusion } from "./sections/EnergyConclusion";
import ReactPlayer from 'react-player';

export function Energy(lang: Language){
    return(
        <>
            {/* <div className="Energy-body-left">
                <Tabs tabPosition="left" className="Energy-tabs">
                    <Tabs.TabPane tab={lang.side_bar.tab1} key="1">
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={lang.side_bar.tab2} key="2">
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={lang.side_bar.tab3} key="3">
                    </Tabs.TabPane>
                </Tabs>
            </div> */}
            
            <div className="Energy-body-right">
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
                        url={'https://youtu.be/0D4a0avy0Ic'}
                    />

                    <div className="intro">
                        <h1 className="intro-title">{lang.header.energy}</h1>
                        <h6 className="intro-links">{lang.others.video}</h6>
                    </div>
                </div>
                <div className="Main-text">
                    <EnergyIntro {...lang}> </EnergyIntro>
                    <InfraEnergies {...lang}> </InfraEnergies>
                    <PersonalEnergies {...lang}> </PersonalEnergies>
                    <CryptoEnergies {...lang}></CryptoEnergies>
                    <EnergyConclusion {...lang}></EnergyConclusion>
                </div>
            </div>
        </>
    )
}