import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

class DialogsItems extends React.Component {
    render = () => {
        return (
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={"/dialogs/" + this.props.id}>{this.props.name}</NavLink>
            </div>
        );
    }
}

export default DialogsItems;