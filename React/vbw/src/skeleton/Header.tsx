import { Menu, Row, Col } from 'antd';
import { SettingOutlined }  from '@ant-design/icons'
import dpLogo from '../assets/dp/dp_logo_nocolor.svg'
import './Header.css'

export function Header(){
    return (
        <header>
            <Menu mode = "horizontal" className = "Header-menu" >
                <Menu.Item className = "Header-menu-element" id="Header-menu-element-logo" disabled={true}>
                    <div className="Header-dp">
                        <img src = {dpLogo} className = "Header-dp-logo"/>
                        <h3>Decentralized People</h3>
                    </div>
                </Menu.Item>
                <Menu.Item className = "Header-menu-element">
                    <SettingOutlined />
                </Menu.Item>
                <Menu.Item className = "Header-menu-element">
                    Item 1
                </Menu.Item>
                <Menu.Item className = "Header-menu-element">
                    Item 2
                </Menu.Item>
                <Menu.Item className = "Header-menu-element">
                    Item 3
                </Menu.Item>
            </Menu>
        </header>
    )
}