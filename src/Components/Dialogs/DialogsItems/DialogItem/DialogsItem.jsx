import React from 'react';
import s from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>
                <img src={props.img}/>
                {props.name}
            </NavLink>
        </div>
    );
};

export default DialogsItem;