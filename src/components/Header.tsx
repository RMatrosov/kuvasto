import {Link, Route, Switch} from "react-router-dom";
import {FC, useState} from "react";
import React from 'react';
import {language} from "../languages/language";
import {useDispatch, useSelector} from "react-redux";
import {selectLang} from "../redux/selectors/selectorLang";
import {setLang} from "../redux/reducers/language";

type THeaderProps = {
    currentEmail: string
    signOut: () => void
}


const Header: FC<THeaderProps> = ({signOut, currentEmail}) => {

    const dispatch = useDispatch()

    const {selectedLang} = useSelector(selectLang)

    function langHandler(value: string): void {
        dispatch(setLang(value))
    }

    return (
        <header className="header">
            <a href="#" target="_blank" className="logo"/>
            <div className="select__btn-wrapper">
                <button className={`select__btn-ru ${selectedLang === 'ru' && 'select__btn-active'}`}
                        onClick={() => langHandler('ru')}>ru</button>
                <button className={`select__btn-fi ${selectedLang === 'fi' && 'select__btn-active'}`}
                        onClick={() => langHandler('fi')}>fi</button>
            </div>
            <div className='header__wrapper'>
                {currentEmail && <p className='header__wrapper_email'>{currentEmail}</p>}
                <Switch>
                    <Route exact path='/'>
                        <button onClick={signOut}
                                className='header__wrapper_button'>
                            {language[selectedLang].header.singOut}
                        </button>
                    </Route>
                    <Route exact path='/sign-up'>
                        <Link to='/sign-in'>
                            <button className='header__wrapper_button'>
                                {language[selectedLang].header.singIn}
                            </button>
                        </Link>
                    </Route>
                    <Route exact path='/sign-in'>
                        <Link to='/sign-up'>
                            <button className='header__wrapper_button'>
                                {language[selectedLang].header.singUp}
                            </button>
                        </Link>
                    </Route>
                </Switch>
            </div>
        </header>
    )
}

export default Header

