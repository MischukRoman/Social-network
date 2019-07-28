import React from 'react';
import s from './Dialogs.module.css';
import {BrowserRouter, NavLink} from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import Post from "../Profile/MyPosts/Post/Post";

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
        let dialogs = [
            {id: 1, name: 'Mari'},
            {id: 2, name: 'Roma'},
            {id: 3, name: 'Vlad'},
            {id: 4, name: 'Sasha'},
        ];

        let messages = [
            {id: 1, message: 'Hello!'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'I love you'},
            {id: 4, message: 'Hi)'}
        ];

        let dialogsElements = dialogs
            .map( d => <DialogsItems name={d.name} id={d.id}/>);
        let messagesElements = messages
            .map(  m => <Message message={m.message}/>);

        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    { dialogsElements }
                </div>
                <div className={s.messages}>
                    { messagesElements }
                </div>
            </div>
        );
    }
}

export default Dialogs;