import React from 'react';
import s from './Dialogs.module.css';
import {BrowserRouter, NavLink} from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";

class DialogsItems extends React.Component {
    render = () => {
        return (
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={"/dialogs/" + this.props.id}>{this.props.name}</NavLink>
            </div>
        );
    }
}

class Message extends React.Component {
    render = () => {
        return (
            <div className={s.message}>
                {this.props.message}
            </div>
        );
    }
}



class Dialogs extends React.Component {
    render = () => {
        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogsItems name="Mari" id="1"/>
                    <DialogsItems name="Roma" id="2"/>
                    <DialogsItems name="Vlad" id="3"/>
                    <DialogsItems name="Sasha" id="4"/>
                </div>
                <div className={s.messages}>
                    <Message message="Hello!"/>
                    <Message message="How are you?"/>
                    <Message message="I love you"/>
                </div>
            </div>
        );
    }
}

export default Dialogs;