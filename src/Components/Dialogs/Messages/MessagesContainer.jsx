import React from 'react';
import Messages from "./Messages";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";

const MessagesContainer = (props) => {
    let state = props.store.getState();
    let newMessage = () => {
        props.store.dispatch( addMessageActionCreator() );
        props.store.dispatch( updateNewMessageTextActionCreator("") );
    };

    let updateNewMessage = (text) => {
        props.store.dispatch( updateNewMessageTextActionCreator(text) );
    };


    return (
        <Messages newMessage={newMessage}
                  updateNewMessage={updateNewMessage}
                  newMessageText={state.dialogsPage.newMessageText}
                  messages={state.dialogsPage.messages}/>
    );
};

export default MessagesContainer;