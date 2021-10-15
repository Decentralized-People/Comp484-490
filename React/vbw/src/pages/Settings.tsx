import React, { useState } from 'react';
import { Drawer } from 'antd';
import { SettingOutlined }  from '@ant-design/icons'


export function Settings(): JSX.Element{

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };

    const onClose = () => {
      setVisible(false);
    };

    return (
        <>
            <div className="Settings-div">
                <SettingOutlined onClick={showDrawer} />
            </div>
            <Drawer title="Settings" placement="right" onClose={onClose} visible={visible}>
                <p>Choose Your Language...</p>
            </Drawer>
        </>
    )
}