import React from 'react';
import s from './Dialogs.module.css';
import DialogsItems from "./DialogsItems/DialogsItems";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map( d => <DialogsItems name={d.name} id={d.id} img={d.img}/>);
    let messagesElements = props.state.messages.map(  m => <Message message={m.message} img={m.img} from={m.from}/>);

    let newMessage = () => {
        let text = newMessagElement.current.value;
        alert(text);
    };

    let newMessagElement = React.createRef();

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <div>
                    <div>
                        <textarea ref={newMessagElement}></textarea>
                    </div>
                    <div>
                        <button onClick={newMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;