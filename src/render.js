import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 updateNewMessageText={updateNewMessageText}
                 addMessage={addMessage}
            />
        </BrowserRouter>, document.getElementById('root'));
};