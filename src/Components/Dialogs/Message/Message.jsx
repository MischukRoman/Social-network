import React from 'react';
import s from './Message.module.css';

class Message extends React.Component {
    render = () => {
        return (
            <div className={s.message}>
                    <img src={this.props.img}/>
                    {this.props.message}
            </div>
        );
    }
}

export default Message;