const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, message: 'Hi! How are you?', LikesCount: 2, img: "http://via.placeholder.com/50"},
        {id: 2, message: 'Hi!you?', LikesCount: 23, img: "http://via.placeholder.com/50"},
        {id: 3, message: 'I love you', LikesCount: 15, img: "http://via.placeholder.com/50"},
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                LikesCount: 15,
                img: "http://via.placeholder.com/50"
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;