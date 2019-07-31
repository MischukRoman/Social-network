import React from 'react';
import s from './DialogsItems.module.css';
import {NavLink} from "react-router-dom";

class DialogsItems extends React.Component {
    render = () => {
        return (
            <div className={s.item}>
                <NavLink to={"/dialogs/" + this.props.id} activeClassName={s.active}>
                    <img src={this.props.img}/>
                    {this.props.name}
                </NavLink>
            </div>
        );
    }
}

export default DialogsItems;