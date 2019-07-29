import React from 'react';
import s from './Dialogs.module.css';
import DialogsItems from "./DialogsItems/DialogsItems";
import Message from "./Message/Message";

class Dialogs extends React.Component {
    render = () => {
        let dialogsElements = this.props.dialogs.map( d => <DialogsItems name={d.name} id={d.id}/>);
        let messagesElements = this.props.messages.map(  m => <Message message={m.message}/>);

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