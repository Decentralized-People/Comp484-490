import React from "react"
import { Typography, Tabs } from 'antd';
import './EWaste.css'
import { Language } from "../assets/lang/_lang_interfaces";

export function EWaste(lang: Language){
    return(
        <>
            <Tabs tabPosition="left" className="Ewaste-tabs">
                 <Tabs.TabPane tab={lang.side_bar.tab1} key="1">
                </Tabs.TabPane>
                <Tabs.TabPane tab={lang.side_bar.tab2} key="2">
                </Tabs.TabPane>
                <Tabs.TabPane tab={lang.side_bar.tab3} key="3">
                </Tabs.TabPane>
            </Tabs>
            <Typography.Title level={3} className="Ewaste-text">
                {lang.sections.e_waste.title}
            </Typography.Title>
        </>
    )

}