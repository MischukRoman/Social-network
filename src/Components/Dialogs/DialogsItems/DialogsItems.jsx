import React from 'react';
import s from './DialogsItems.module.css';
import {NavLink} from "react-router-dom";

const DialogsItems = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>
                <img src={props.img}/>
                {props.name}
            </NavLink>
        </div>
    );
};

export default DialogsItems;