import {rerenderEntireTree} from "../render";


let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi! How are you?', LikesCount: 2, img: "http://via.placeholder.com/50"},
            {id: 2, message: 'Hi!you?', LikesCount: 23, img: "http://via.placeholder.com/50"},
            {id: 3, message: 'I love you', LikesCount: 15, img: "http://via.placeholder.com/50"},
        ],
        newPost: [
           {id: 4,
            message: '',
            LikesCount: 15,
            img: "http://via.placeholder.com/50"}
        ]
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
  state.profilePage.posts.push(state.profilePage.newPost);
  rerenderEntireTree(state);
};

export let changePost = (postChanges) => {
    state.profilePage.newPost.message += postChanges;
};

export default state;