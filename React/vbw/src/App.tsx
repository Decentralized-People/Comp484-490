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

import en_US from "./assets/lang/en_US.json";
import ru_RU from "./assets/lang/ru_RU.json";

function App(): JSX.Element {


  const lang = useTypedSelector((state) => state.reducers.language);
  const energy = Energy(lang);

  const dispatch = useDispatch();

  function settingsToggle() {
    dispatch(toggleSettings());
  }


  return (
    <div className="App">
      <BrowserRouter>
        {/* HEADER: DP Logo -> Settings -> Energy -> Carbon Emissions -> E-Waste */}
        <header className="Header">
          <Menu mode = "horizontal" className = "Header-menu" defaultSelectedKeys={["Energy"]}>
              <Menu.Item className = "Header-menu-element" id="Header-menu-element-logo" disabled={true}>
                  <div className="Header-dp">
                      <img src = {dpLogo} className = "Header-dp-logo" alt="Decentralized People logo"/>
                      <h3 className="Header-dp-text">{lang.authors}</h3>
                  </div>
              </Menu.Item>
              <Menu.Item className = "Header-menu-element" id="Header-menu-element-item1" key="Energy">
                  <Link to="/energy">{lang.header.energy}</Link>
              </Menu.Item>
              <Menu.Item className = "Header-menu-element" id="Header-menu-element-item2" key="CarbonEmissions">
                  <Link to="/carbon-emissions">{lang.header.carbon_emissions}</Link>
              </Menu.Item>
              <Menu.Item className = "Header-menu-element" id="Header-menu-element-item3" key="EWaste">
                  <Link to="/e-waste">{lang.header.e_waste}</Link>
              </Menu.Item>
              <Menu.Item className = "Header-menu-element" id="Header-menu-element-settings" onClick={settingsToggle}>
                  <Settings {...lang}/>
              </Menu.Item>
          </Menu>
        </header>
        {/* ////////////////////////////////////////////////////////////////////// */}
        <div className="Body">

          <Route path="/" />
          <Redirect to="/energy"></Redirect>
          <Route path="/energy" children={Energy(lang)}/>
          <Route path="/carbon-emissions" children={CarbonEmissions(lang)} />
          <Route path="/e-waste" children={EWaste(lang)}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
