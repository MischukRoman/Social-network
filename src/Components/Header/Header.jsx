import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
        return (
                <header className={s.header}>
                    <img src="http://brend-logo.ru/assets/976fb447/images/cssp_logo.png"/>

                    <div className={s.loginBlock}>
                        { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
                    </div>
                </header>
        );
};

export default Header;