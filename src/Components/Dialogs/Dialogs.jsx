import React from 'react';
import s from './Dialogs.module.css';
import DialogsItems from "./DialogsItems/DialogsItems";
import Message from "./Message/Message";

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