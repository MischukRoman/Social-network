import React from 'react';
import {addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostBody) => {
            dispatch( addPost(newPostBody) );}
    }
};


const MyPostsСontainer = connect (mapStateToProps, mapDispatchToProps)  (MyPosts);

export default MyPostsСontainer;