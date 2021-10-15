import React from "react"
import { Typography, Tabs } from 'antd';
import './CarbonEmissions.css'

export function CarbonEmissions(){
    return(
        <>
            <Tabs tabPosition="left" className="CarbonEmissions-tabs">
                <Tabs.TabPane tab="Tab 1" key="1">
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab 2" key="2">
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab 3" key="3">
                </Tabs.TabPane>
            </Tabs>
            <Typography.Title level={3} className="CarbonEmissions-text">
                Hello World, I am the carbon emissions!
            </Typography.Title>
        </>
    )
}