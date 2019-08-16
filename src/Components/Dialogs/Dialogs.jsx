import React from 'react';
import s from './Dialogs.module.css';
import DialogsItems from "./DialogsItems/DialogsItems";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogsItems dialogsPage={props.dialogsPage}/>
            <Messages dialogsPage={props.dialogsPage}
                      dispatch={props.dispatch}/>
        </div>
    );
};

export default Dialogs;