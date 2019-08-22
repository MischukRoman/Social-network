import React from 'react';
import s from './Messages.module.css';
import Message from "./Message/Message";

const Messages = (props) => {
    let messagesElements = props.messages.map(  m => <Message message={m.message}
                                                                          img={m.img}
                                                                          from={m.from}/>);
    let newMessage = () => {
        props.newMessage();
    };

    let updateNewMessage = (e) => {
        let text = e.target.value;
        props.updateNewMessage(text);
    };


    return (
        <div className={s.messages}>
            { messagesElements }
            <div>
                <div>
                    <textarea onChange={updateNewMessage}
                              value={props.newMessageText}
                              placeholder="Введите сообщение"/>
                </div>
                <div>
                    <button onClick={newMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Messages;