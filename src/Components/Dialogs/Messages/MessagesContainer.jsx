import React from 'react';
import Messages from "./Messages";
import {addMessage} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        newMessage: (newMessageBody) => {
            dispatch( addMessage(newMessageBody) );}
    }
};

export default compose(
    connect (mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Messages);