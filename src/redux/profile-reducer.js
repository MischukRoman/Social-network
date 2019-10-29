import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

let initialState = {
    posts: [
        {id: 1, message: 'Hi! How are you?', LikesCount: 2, img: "http://via.placeholder.com/50"},
        {id: 2, message: 'Hi!you?', LikesCount: 23, img: "http://via.placeholder.com/50"},
        {id: 3, message: 'I love you', LikesCount: 15, img: "http://via.placeholder.com/50"},
    ],
    newPostText: '',
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 4,
                message: state.newPostText,
                LikesCount: 15,
                img: "http://via.placeholder.com/50"
            };
            return (
                {...state,
                posts: [...state.posts, newPost],
                newPostText: ""}
                );
        }

        case UPDATE_NEW_POST_TEXT:{
            return (
                {...state,
                    newPostText: action.newText}
            );
        }

        case SET_STATUS:{
            return (
                {...state,
                    status: action.status}
            );
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setStatus = (status) =>
    ({type: SET_STATUS, status});

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        })
};

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }

        })
};

export default profileReducer;