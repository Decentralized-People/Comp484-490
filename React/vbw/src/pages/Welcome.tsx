import { useDispatch } from "react-redux";

import { Button, Modal } from "antd";

import Logo from "../assets/icons/dp_logo_color.svg";
import KzooLogo from "../assets/icons/K2LineLeft 2CP.png";

import "./Welcome.css";
import { useState } from "react";

/**
 * Welcome page element component.
 * 
 * @returns the enitre welcome page component as a JSX.Element.
 */
export function Welcome(): JSX.Element {
    const dispatch = useDispatch()

    const [welcomeVisibility, setWelcomeVisibility] = useState(true);

    return (
        <>
         <Modal
         
            title="Welcome to projectVBW" 
            centered={true}
            visible={welcomeVisibility} 
            width={1200}
            okButtonProps={{ ghost: true }}
            onCancel={() => setWelcomeVisibility(false)}
            footer={[
                <Button key="continue" type="primary" onClick = {() => setWelcomeVisibility(false)}>
                  Continue
                </Button>
              ]}
        >
            <div className="Container-modal">
                <div className="Logo-text-description">
                    <div className="Logo-text">
                        <img
                            className="Logo-welcome"
                            src={Logo}
                            alt="Logo"
                        ></img>
                        <div className="Descripntion-welcome-container-q">
                                <h1>Exploring the Impact of the Internet</h1>
                        </div>
                    </div>
                    <p className="Description-welcome-text">
                        The internet, in its entirety, contributes strongly to the degradation of the environment. The words "The Internet" can refer to a variety of unique, interacting architecture, so it is important to distinguish which aspects of the internet are being discussed. This article seeks to formalize information regarding the energy use and related carbon emissions of three specific aspects of the internet: infrastructures for data storage and transmission, personal devices connecting to the internet, and cryptocurrencies. We determine these to be relevant in understanding a minimal environmental impact on the environment, how individuals contribute to it, and how societal obsessions contribute to it. Each of the three aspects of the internet will discuss these, respectively.
                    </p>
                </div>
                <div className="Developers-mentor-repository">
                    <h3>Developers</h3>
                    <ul>
                        <li>Aleksandr Molchagin</li>
                        <li>Lucas Rizzolo</li>
                        <li>David Xu</li>
                        <li>William Shaw</li>
                        <li>Revaz Bakuradze</li>
                        <li>Terry Nuechterlein</li>
                    </ul>
                    <h3>Mentor</h3>
                    <ul>
                        <li>Dr. Sandino Vargas-Perez</li>
                    </ul>
                    <h3>Project Repository</h3>
                    <a type="link" target="_blank" href="https://github.com/Decentralized-People/projectVBW">https://github.com/Decentralized-People/projectVBW/</a>
                    <a target="_blank" href="https://kzoo.edu">
                        <img
                            className="Kzoo-welcome"
                            src={KzooLogo}
                            alt="Logo"
                        >
                        </img>
                    </a>
                </div>
            </div>
         </Modal>
        </>
    );
}
