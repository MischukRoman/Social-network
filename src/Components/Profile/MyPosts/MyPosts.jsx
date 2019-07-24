import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

class MyPosts extends React.Component {
    render = () => {
        return (
            <div>
                    My posts
                    <div>
                        <textarea>

                        </textarea>
                        <button>Add post</button>
                    </div>

                    <div className={s.posts}>
                        <Post message='Hi! How are you?' LikesCount="2"/>
                        <Post message='Hi!you?' LikesCount="23"/>
                    </div>
            </div>
        );
    }
}

export default MyPosts;