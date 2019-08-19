const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";


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
        if(action.type === ADD_POST){
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                LikesCount: 15,
                img: "http://via.placeholder.com/50"
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText,
                from: 'me',
                img: "http://via.placeholder.com/50"
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    },
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});




export default store;

window.store = store;