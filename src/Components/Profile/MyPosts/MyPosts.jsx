import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

class MyPosts extends React.Component {
    render = () => {
        let posts = [
            {id: 1, message: 'Hi! How are you?', LikesCount: 2},
            {id: 2, message: 'Hi!you?', LikesCount: 23},
            {id: 3, message: 'I love you', LikesCount: 15},
        ];

        let postsElements = posts.map( p => <Post message={p.message} LikesCount={p.LikesCount}/>);

        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                    <div>
                        <div>
                            <textarea>  </textarea>
                        </div>
                        <div>
                            <button>Add post</button>
                        </div>
                    </div>

                    <div className={s.posts}>
                        { postsElements }
                    </div>
            </div>
        );
    }
}

export default MyPosts;