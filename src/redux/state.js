import {rerenderEntireTree} from "../render";


let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi! How are you?', LikesCount: 2, img: "http://via.placeholder.com/50"},
            {id: 2, message: 'Hi!you?', LikesCount: 23, img: "http://via.placeholder.com/50"},
            {id: 3, message: 'I love you', LikesCount: 15, img: "http://via.placeholder.com/50"},
        ],
        newPostText: ''
        },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Mari', img: "http://via.placeholder.com/50"},
            {id: 2, name: 'Roma', img: "http://via.placeholder.com/50"},
            {id: 3, name: 'Vlad', img: "http://via.placeholder.com/50"},
            {id: 4, name: 'Sasha', img: "http://via.placeholder.com/50"},
        ],
        messages: [
            {id: 1, message: 'Hello!', from: 'me'},
            {id: 2, message: 'How are you?', from: 'me'},
            {id: 3, message: 'I love you', from: 'me'},
            {id: 4, message: 'Hi)', from: 'you'},
            {id: 5, message: 'I love you to', from: 'you'},
        ]
    },
};

export let addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        LikesCount: 15,
        img: "http://via.placeholder.com/50"
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;