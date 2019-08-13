import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import state from "../../../redux/state";

const MyPosts = (props) => {
        let postsElements = props.posts.map( p =>
            <Post message={p.message} LikesCount={p.LikesCount}/>);

        let newPostElement = React.createRef();

        let addPost = () => {
            props.addPost();
            newPostElement.current.value = "";
        };
        let changesPost  = (e) => {
            let text = e.current.value;
            props.changePost(text);
        };
        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                    <div>
                        <div>
                            <textarea ref={newPostElement} onChange={changesPost}></textarea>
                        </div>
                        <div>
                            <button onClick={addPost}>Add post</button>
                        </div>
                    </div>

                    <div className={s.posts}>
                        { postsElements }
                    </div>
            </div>
        );
};

export default MyPosts;