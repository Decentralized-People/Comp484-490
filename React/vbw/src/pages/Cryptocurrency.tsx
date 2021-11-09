import React from "react";
import { Typography, Tabs } from 'antd';
import { Language } from "../store/interfaces";
import { CoinGraph } from "./CoinGraph";

export function Cryptocurrency(lang: Language){


    return(
        <>
            <Tabs tabPosition="left" className="Energy-tabs">
            <Tabs.TabPane tab={lang.side_bar.tab1} key="1">
                </Tabs.TabPane>
                <Tabs.TabPane tab={lang.side_bar.tab2} key="2">
                </Tabs.TabPane>
                <Tabs.TabPane tab={lang.side_bar.tab3} key="3">
                </Tabs.TabPane>
            </Tabs>
            <Typography.Title level={3} className="Energy-text">
                <CoinGraph {...lang} ></CoinGraph>
            </Typography.Title>
        </>
    )
}