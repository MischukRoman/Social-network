import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {id: 1, name: 'Mari'},
    {id: 2, name: 'Roma'},
    {id: 3, name: 'Vlad'},
    {id: 4, name: 'Sasha'},
];

let messages = [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'I love you'},
    {id: 4, message: 'Hi)'}
];

let posts = [
    {id: 1, message: 'Hi! How are you?', LikesCount: 2},
    {id: 2, message: 'Hi!you?', LikesCount: 23},
    {id: 3, message: 'I love you', LikesCount: 15},
];

ReactDOM.render(<App dialogs={(dialogs)} messages={(messages)} posts={posts}/>, document.getElementById('root'));

serviceWorker.unregister();
