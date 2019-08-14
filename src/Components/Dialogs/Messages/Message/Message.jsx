import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>
            <img src={props.img}/>
            {props.message}
        </div>
    );
};

export default Message;