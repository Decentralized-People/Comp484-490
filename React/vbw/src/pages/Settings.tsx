import { Drawer } from 'antd';
import { SettingOutlined }  from '@ant-design/icons'
import { useTypedSelector } from '../store';
import { useDispatch } from 'react-redux';
import { switchLanguage } from '../store/actions';
import { Language } from '../store/interfaces';

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
                <button onClick={() => changeLang("geoGeo") }>Switch to Georgian Language (The Best Language)</button>
                <button onClick={() => changeLang("enUS") }>Switch language to Eng</button>
                <button onClick={() => changeLang("ruRU") }>Switch language to Rus</button>
                <button onClick={() => changeLang("fiFIN") }>Switch language to Fin</button>
                <button onClick={() => changeLang("deDE") }>Switch language to Deu</button>
                <button onClick={() => changeLang("freFRE") }>Switch language to Fre</button>
            </Drawer>
        </>
    )
}