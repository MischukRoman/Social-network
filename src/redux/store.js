import profileReducer from "./profile-reducer";
import dislogsReducer from "./dialogs-reducer";

let store = {
    _state: {
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
                {id: 1, message: 'Hello!', from: 'me', img: "http://via.placeholder.com/50"},
                {id: 2, message: 'How are you?', from: 'me', img: "http://via.placeholder.com/50"},
                {id: 3, message: 'I love you', from: 'me', img: "http://via.placeholder.com/50"},
                {id: 4, message: 'Hi)', from: 'you', img: "http://via.placeholder.com/50"},
                {id: 5, message: 'I love you to', from: 'you', img: "http://via.placeholder.com/50"},
            ],
            newMessageText: ''
        },
    },
    _callSubscriber() {
        console.log("State changed");
    },
    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        dislogsReducer(this._state.dialogsPage, action);
        profileReducer(this._state.profilePage, action);

        this._callSubscriber(this._state);
    },
};

export default store;

window.store = store;