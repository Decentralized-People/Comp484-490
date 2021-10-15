import React from "react"
import { Typography, Tabs } from 'antd';
import './EWaste.css'

export function EWaste(){
    return(
        <>
            <Tabs tabPosition="left" className="Ewaste-tabs">
                <Tabs.TabPane tab="Tab 1" key="1">
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab 2" key="2">
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab 3" key="3">
                </Tabs.TabPane>
            </Tabs>
            <Typography.Title level={3} className="Ewaste-text">
                Hello World, I am the e-waste!
            </Typography.Title>
        </>
    )

}