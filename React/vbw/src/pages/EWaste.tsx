import React from "react"
import { Typography, Tabs } from 'antd';
import './EWaste.css'
import { Language } from "../store/interfaces";
import { RecycleGraph } from "./graphs/RecycleGraph";

export function EWaste(lang: Language){
    return(
        <>
            <div className="Ewaste-body-left">
                <Tabs tabPosition="left" className="Ewaste-tabs">
                    <Tabs.TabPane tab={lang.side_bar.tab1} key="1">
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={lang.side_bar.tab2} key="2">
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={lang.side_bar.tab3} key="3">
                    </Tabs.TabPane>
                </Tabs>
            </div>
            <div className="Ewaste-body-right">
                <RecycleGraph {...lang}> </RecycleGraph>
               
                <p className="">E-waste pollution is a matter that is not discussed as much as it should. Most consumers are not aware of the proper ways to recycle their e-waste, and blindly buy into companies' planned obscelescence. 
                    The rise of "greenwashing," or companies feigning environmental friendliness, has led to less transparency about how consumers should be handling their e-waste. The amount that we produce as consumers increases year by year, influenced largely by big tech companies who lead the way to an insufferable end. The cycle of buying "new" products every year is not only hurting consumers' wallets, but also our environment. This method of business is something that we as consumers need to be more aware of so that we do not need a new “iPhone” every year. Many of these devices, when improperly disposed of, lead to chemical leaching, resulting in hazardous toxins being released into our environment. When the environment is polluted it
                </p>
                <p>Cryptocurrency mining produces large quantities of e-waste with not much attention from the media. Many of these high computational machines end up in the waste without the proper process of recycling the high power machines. Especially due the short life span of these crypto mining rigs with an average of only 1.29 years(bbc news) of life span on these machines. Do keep in mind that these machines are powered on 24/7 for that average life span of 1.29 years. It is important to keep in mind that these crypto mining rigs and graphics cards used to mine crypto currencies can only be used once to mine for the crypto currency. It cannot be used to mine the same crypto currency again. This results in the machine to be considered as an e-waste product. </p>
            
                <li>Bitcoin mining producing tonnes of waste - BBC News</li>
                <li>Cleaning Up Electronic Waste (E-Waste) | US EPA</li>
                <li>Bitcoin poses major electronic-waste problem (acs.org)</li>
            
            </div>
        </>
    )

}