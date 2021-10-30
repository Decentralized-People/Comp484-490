import { Drawer } from 'antd';
import { SettingOutlined }  from '@ant-design/icons'
import { useTypedSelector } from '../store';
export function Settings(): JSX.Element{

    const visible = useTypedSelector((state) => state.reducers.settings_open);

    return (
        <>
            <div className="Settings-div">
                <SettingOutlined/>
            </div>
            <Drawer title="Settings" placement="right" visible={visible}>
                <p>Choose Your Language...</p>
            </Drawer>
        </>
    )
}