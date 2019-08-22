import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsСontainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    debugger;
        return (
            <div className={s.content}>
                <ProfileInfo/>
                <MyPostsСontainer store={props.store}/>
            </div>
        );
};

export default Profile;