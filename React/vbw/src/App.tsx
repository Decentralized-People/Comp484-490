import React from 'react';
import logo from './logo.svg';
import './App.less';
import { Menu } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu mode ="horizontal">
          <Menu.Item>
            Item 1 
          </Menu.Item>
          <Menu.Item>
            Item 2
          </Menu.Item>
          <Menu.Item>
            Item 3
          </Menu.Item>
        </Menu>
        <p>
        </p>
      </header>
    </div>
  );
}

export default App;
