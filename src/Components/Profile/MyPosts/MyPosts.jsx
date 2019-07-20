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
                    <Post/>
                    <Post/>
                    <Post/>
            </div>
        );
    }
}

export default MyPosts;