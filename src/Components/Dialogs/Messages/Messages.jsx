import React from 'react';
import s from './Messages.module.css';
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";


const maxLength100 = maxLengthCreator(100);

const Messages = (props) => {
    let messagesElements = props.messages.map(  m => <Message message={m.message}
                                                                          img={m.img}
                                                                          from={m.from}/>);

    let addNewMessage = (values) => {
        props.newMessage(values.newMessageBody);
    };

    return (
        <div className={s.messages}>
            { messagesElements }
            <div>
                <AddMessagesReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

const AddMessagesForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                    <Field component={Textarea}
                           validate={[required, maxLength100]}
                           name={'newMessageBody'}
                           placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};

const AddMessagesReduxForm = reduxForm({
    form: "dialogAddMessagesForm"
}) (AddMessagesForm);

export default Messages;