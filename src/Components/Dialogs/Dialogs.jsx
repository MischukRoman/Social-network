import React from 'react';
import s from './Dialogs.module.css';
import DialogsItems from "./DialogsItems/DialogsItems";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogsItems dialogsPage={props.store.getState().dialogsPage}/>
            <MessagesContainer store={props.store}/>
        </div>
    );
};

export default Dialogs;