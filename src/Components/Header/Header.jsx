import React from 'react';
import s from './Header.module.css';

class Header extends React.Component {
    render = () => {
        return (
                <header className={s.header}>
                    <img src="http://brend-logo.ru/assets/976fb447/images/cssp_logo.png"/>
                </header>
        );
    }
}

export default Header;