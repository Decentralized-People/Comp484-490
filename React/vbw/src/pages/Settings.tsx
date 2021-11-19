import { Button, Drawer } from 'antd';
import { SettingOutlined }  from '@ant-design/icons'
import { useTypedSelector } from '../store';
import { useDispatch } from 'react-redux';
import { switchLanguage } from '../store/actions';
import { Language } from '../store/interfaces';
import Flag from 'national-flag-icons';
import "./Settings.css"

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
            <Drawer className="Settings-computer" title={lang.settings.title} placement="right" visible={visible} width="25%">
                <p>{lang.settings.choose}...</p>
                
                <div className="Language-buttons-container">
                    <div className="Language-button">
                        <Button onClick={() => changeLang("enUS") } block={true}> 🇺🇸 {lang.settings.en} </Button>
                    </div>
                    <div className="Language-button">
                        <Button onClick={() => changeLang("ruRU") } block={true}> 🇷🇺 {lang.settings.ru}</Button>
                    </div>
                    <div className="Language-button">
                        <Button onClick={() => changeLang("fiFIN") } block={true}> 🇫🇮 {lang.settings.fi}</Button>
                    </div>
                    <div className="Language-button">
                        <Button onClick={() => changeLang("deDE") } block={true}> 🇩🇪 {lang.settings.de}</Button>
                    </div>
                    <div className="Language-button">
                        <Button onClick={() => changeLang("freFRE") } block={true}> 🇫🇷 {lang.settings.fr}</Button>
                    </div>
                    <div className="Language-button">
                        <Button onClick={() => changeLang("spSP") } block={true} > 🇪🇸 {lang.settings.es}</Button>
                    </div> 
                    {/* moved to the bottom because one of us constantly move it to the top :/ */}
                    <div className="Language-button">
                        <Button onClick={() => changeLang("geoGEO") } block={true}> 🇬🇪 {lang.settings.ge}</Button>
                    </div>
                </div>
            </Drawer>


            <Drawer className="Settings-mobile" title={lang.settings.title} placement="right" visible={visible} width="100%">
                <p>{lang.settings.choose}...</p>
                
                <div className="Language-buttons-container">
                <div className="Language-button">
                        <Button onClick={() => changeLang("enUS") } block={true}> 🇺🇸 {lang.settings.en} </Button>
                    </div>
                    <div className="Language-button">
                        <Button onClick={() => changeLang("ruRU") } block={true}> 🇷🇺 {lang.settings.ru}</Button>
                    </div>
                    <div className="Language-button">
                        <Button onClick={() => changeLang("fiFIN") } block={true}> 🇫🇮 {lang.settings.fi}</Button>
                    </div>
                    <div className="Language-button">
                        <Button onClick={() => changeLang("deDE") } block={true}> 🇩🇪 {lang.settings.de}</Button>
                    </div>
                    <div className="Language-button">
                        <Button onClick={() => changeLang("freFRE") } block={true}> 🇫🇷 {lang.settings.fr}</Button>
                    </div>
                    <div className="Language-button">
                        <Button onClick={() => changeLang("spSP") } block={true} > 🇪🇸 {lang.settings.es}</Button>
                    </div> 
                    {/* moved to the bottom because one of us constantly move it to the top :/ */}
                    <div className="Language-button">
                        <Button onClick={() => changeLang("geoGEO") } block={true}> 🇬🇪 {lang.settings.ge}</Button>
                    </div>
                </div>
            </Drawer>
        </>
    )
}