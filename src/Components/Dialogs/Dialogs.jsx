import React from 'react';
import s from './Dialogs.module.css';
import DialogsItems from "./DialogsItems/DialogsItems";
import Message from "./Message/Message";

class Dialogs extends React.Component {
    render = () => {
        let dialogsElements = this.props.state.dialogs.map( d => <DialogsItems name={d.name} id={d.id} img={d.img}/>);
        let messagesElements = this.props.state.messages.map(  m => <Message message={m.message} img={m.img} from={m.from}/>);

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