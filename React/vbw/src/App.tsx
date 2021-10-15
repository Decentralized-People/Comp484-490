import React from 'react';
import './App.less';
import { Menu, Row, Col } from 'antd';
import { SettingOutlined }  from '@ant-design/icons'
import dpLogo from './assets/dp/dp_logo_nocolor.svg'
import { CarbonEmissions } from './pages/CarbonEmissions';
import { Energy } from './pages/Energy';
import { EWaste } from './pages/EWaste';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        {/* HEADER: DP Logo -> Settings -> Energy -> Carbon Emissions -> E-Waste */}
        <header className="Header">
          <Menu mode = "horizontal" className = "Header-menu" defaultSelectedKeys={["Energy"]}>
              <Menu.Item className = "Header-menu-element" id="Header-menu-element-logo" disabled={true}>
                  <div className="Header-dp">
                      <img src = {dpLogo} className = "Header-dp-logo"/>
                      <h3>Decentralized People</h3>
                  </div>
              </Menu.Item>
              <Menu.Item className = "Header-menu-element" id="Header-menu-element-settings">
                  <SettingOutlined />
              </Menu.Item>
              <Menu.Item className = "Header-menu-element" id="Header-menu-element-item1" key="Energy">
                  <Link to="/energy">Energy</Link>
              </Menu.Item>
              <Menu.Item className = "Header-menu-element" id="Header-menu-element-item2" key="CarbonEmissions">
                  <Link to="/carbon-emissions">Carbon Emissions</Link>
              </Menu.Item>
              <Menu.Item className = "Header-menu-element" id="Header-menu-element-item3" key="EWaste">
                  <Link to="/e-waste">E-waste</Link>
              </Menu.Item>
          </Menu>
        </header>
        {/* ////////////////////////////////////////////////////////////////////// */}
        <div className="Body">
          <Route path="/" />
          <Redirect to="/energy"></Redirect>
          <Route path="/energy" component={Energy} />
          <Route path="/carbon-emissions" exact component={CarbonEmissions} />
          <Route path="/e-waste" component={EWaste} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
