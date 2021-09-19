import {Link, Route, Switch} from "react-router-dom";
import {FC, useState} from "react";
import React from 'react';
import {useTranslation} from "react-i18next";

type THeaderProps = {
    currentEmail: string
    signOut: () => void
}


const Header: FC<THeaderProps> = ({signOut, currentEmail}) => {

    const [selectedLang, setSelectedLang] = useState('ru');

    const {t, i18n} = useTranslation();

    const changeLanguage = (language: any) => {
        i18n.changeLanguage(language);
        setSelectedLang(language)
    };

    return (
        <header className="header">
            <a href="#" target="_blank" className="logo"/>
            <div className="select__btn-wrapper">
                <button className={`select__btn-ru ${selectedLang === 'ru' && 'select__btn-active'}`}
                        onClick={() => changeLanguage("ru")
                        }>ru
                </button>
                <button className={`select__btn-fi ${selectedLang === 'fi' && 'select__btn-active'}`}
                        onClick={() => changeLanguage("fi")}>fi
                </button>
            </div>
            <div className='header__wrapper'>
                {currentEmail && <p className='header__wrapper_email'>{currentEmail}</p>}
                <Switch>
                    <Route exact path='/'>
                        <button onClick={signOut}
                                className='header__wrapper_button'>
                            {t("header.singOut")}
                        </button>
                    </Route>
                    <Route exact path='/sign-up'>
                        <Link to='/sign-in'>
                            <button className='header__wrapper_button'>
                                {t("header.singIn")}
                            </button>
                        </Link>
                    </Route>
                    <Route exact path='/sign-in'>
                        <Link to='/sign-up'>
                            <button className='header__wrapper_button'>
                                {t("header.singUp")}
                            </button>
                        </Link>
                    </Route>
                </Switch>
            </div>
        </header>
    )
}

export default Header

