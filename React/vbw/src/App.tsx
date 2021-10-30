import React from 'react';
import './App.less';
import { Menu } from 'antd';
import dpLogo from './assets/dp/dp_logo_nocolor.svg'
import { CarbonEmissions } from './pages/CarbonEmissions';
import { Energy } from './pages/Energy';
import { EWaste } from './pages/EWaste';
import { Settings } from './pages/Settings';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSettings } from './store/actions';
import { useTypedSelector } from './store';


function App(): JSX.Element {

  const dispatch = useDispatch();

  function settingsToggle() {
    dispatch(toggleSettings());
  }

  const visible = useTypedSelector((state) => state.reducers.settings_open);


  return (
    <div className="App">
      <BrowserRouter>
        {/* HEADER: DP Logo -> Settings -> Energy -> Carbon Emissions -> E-Waste */}
        <header className="Header">
          <Menu mode = "horizontal" className = "Header-menu" defaultSelectedKeys={["Energy"]}>
              <Menu.Item className = "Header-menu-element" id="Header-menu-element-logo" disabled={true}>
                  <div className="Header-dp">
                      <img src = {dpLogo} className = "Header-dp-logo" alt="Decentralized People logo"/>
                      <h3 className="Header-dp-text">Decentralized People</h3>
                  </div>
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
              <Menu.Item className = "Header-menu-element" id="Header-menu-element-settings" onClick={settingsToggle}>
                  <Settings/>
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
