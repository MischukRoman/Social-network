import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

class Profile extends React.Component {
    render = () => {
        return (
            <div className={s.content}>
                <div>
                    <img src='https://guruturizma.ru/wp-content/uploads/2016/01/Da-Nang-Beach.jpg'/>
                </div>
                <div>
                    ava + description
                </div>
                <MyPosts/>
            </div>
        );
    }
}

export default Profile;