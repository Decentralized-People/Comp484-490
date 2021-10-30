import { Drawer } from 'antd';
import { SettingOutlined }  from '@ant-design/icons'
import { useTypedSelector } from '../store';
import { useDispatch } from 'react-redux';
import { switchLanguage } from '../store/actions';
import { Language } from '../assets/lang/_lang_interfaces';

export function Settings(lang: Language): JSX.Element{

    const visible = useTypedSelector((state) => state.reducers.settings_open);

    const dispatch = useDispatch();

    function changeLang(lang: string){
        dispatch(switchLanguage(lang));
    }

    return (
        <>
            <div className="Settings-div">
                <SettingOutlined/>
            </div>
            <Drawer title={lang.settings.title} placement="right" visible={visible}>
                <p>{lang.settings.choose}...</p>
                <button onClick={() => changeLang("enUS") }>Switch language to Eng</button>
                <button onClick={() => changeLang("ruRU") }>Switch language to Rus</button>
            </Drawer>
        </>
    )
}