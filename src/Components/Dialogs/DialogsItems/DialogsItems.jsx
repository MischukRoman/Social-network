import React from 'react';
import s from './DialogsItems.module.css';
import DialogsItem from "./DialogItem/DialogsItem";

const DialogsItems = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogsItem name={d.name} id={d.id} img={d.img}/>);

    return (
        <div className={s.dialogsItems}>
            { dialogsElements }
        </div>
    );
};

export default DialogsItems;