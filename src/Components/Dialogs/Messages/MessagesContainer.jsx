import React from 'react';
import Messages from "./Messages";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        newMessage: () => {
            dispatch( addMessageActionCreator() );
            dispatch( updateNewMessageTextActionCreator("") );},
        updateNewMessage: (text) => {
            dispatch( updateNewMessageTextActionCreator(text) );},
    }
};

const MessagesContainer = connect (mapStateToProps, mapDispatchToProps) (Messages);

export default MessagesContainer;