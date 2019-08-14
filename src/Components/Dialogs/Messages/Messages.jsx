import React from 'react';
import s from './Messages.module.css';
import Message from "./Message/Message";

const Messages = (props) => {
    let messagesElements = props.dialogsPage.messages.map(  m => <Message message={m.message} img={m.img} from={m.from}/>);

    let newMessage = () => {
        props.addMessage();
        props.updateNewMessageText('');
    };

    let updateNewMessage = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    };

    let newMessageElement = React.createRef();

    return (
        <div className={s.messages}>
            { messagesElements }
            <div>
                <div>
                    <textarea ref={newMessageElement}
                              onChange={updateNewMessage}
                              value={props.dialogsPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={newMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Messages;