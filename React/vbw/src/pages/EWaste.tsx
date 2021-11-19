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
               
                <p className="">E-waste pollution is a matter that is not discussed as much as it is supposed to be. Most of the consumers are not aware of the proper ways to recycle their e-waste. Especially with the increasing idea of greenwash, it is not helping the consumers to actually understand the proper ways of handling the e-waste. The amount of e-waste we produce as consumers increases year by year. The big tech companies are the biggest influence in the increasing consumption. It does not help when tech companies are coming out with new technologies every year, many companies are boosting obsolescence in technology. This is a cycle that we consumers need to be more aware of so that we do not need a new “Iphone” every year. Many of these devices can result in chemical leaching when it is not handled correctly. Which results in hazardous toxins to be released into our environment. This can pollute our water system and the soil, making it more acidic and unconditional for us to use. In the long run this can bring new illnesses too.
                </p>
                <p>Cryptocurrency mining produces large quantities of e-waste with not much attention from the media. Many of these high computational machines end up in the waste without the proper process of recycling the high power machines. Especially due the short life span of these crypto mining rigs with an average of only 1.29 years of life span on these machines. Do keep in mind that these machines are powered on 24/7 for that average life span of 1.29 years. The bitcoin network grew from just 1 metric kiloton of mining devices in July 2014 to a peak of 39.75 metric kilotons in may 2021 (resources, conservation, and recycling, Xu, Ming). This amount represents roughly 2.9 million mining devices. Based on the economic lifetime of 1.29 years, the e-waste output is calculated to 30.7 metric kilotons annually per may 2021. It is important to keep in mind that these crypto mining rigs and graphics cards used to mine crypto currencies can only be used once to mine for the crypto currency. It cannot be used to mine the same crypto currency again. This results in the machine to be considered as an e-waste product. </p>            
                <p>Over time, Crypto miners have turned to increasingly specialized hardware equipment with higher computing power. Whereas miners initially used central processing units (CPUs) to mine, they quickly realized that graphic processing units (GPUs) were better equipped for the task. In 2013, application-specific integrated circuits (ASICs) entered mining and replaced GPUs as the standard. ASICs are designed to perform a single repeated function. This makes them far more efficient at their specific task than the general purpose chips used in CPUs and GPUs. However, the fact that ASIC chips are single-purpose and not customizable prevents them from being repurposed for another task or even another type of cryptocurrency mining algorithm. In other words, they can’t be repurposed after becoming obsolete for their single purpose and as a result, they become e-waste at the end of their life.</p>
                <a href="https://www.bbc.com/news/technology-58572385">Bitcoin mining producing tonnes of waste - BBC News</a>
                <a href="https://www.epa.gov/international-cooperation/cleaning-electronic-waste-e-waste">Cleaning Up Electronic Waste (E-Waste) | US EPA</a>
                <a href="https://cen.acs.org/environment/sustainability/Bitcoin-poses-major-electronic-waste/97/i11">Bitcoin poses major electronic-waste problem (acs.org)</a>
                <a href="https://www.journals.elsevier.com/resources-conservation-and-recycling">Xu, M. (2020). Resources, conservation & recycling 2019 best paper awards. Resources, Conservation and Recycling, 158</a>
            </div>
        </>
    )

}