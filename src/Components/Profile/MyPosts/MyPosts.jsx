import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
        let postsElements = props.posts.map( p =>
            <Post message={p.message} LikesCount={p.LikesCount}/>);

        let onAddPost = (values) => {
            props.addPost(values.newPostBody);
        };

        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                    <div>
                        <NewPostReduxForm onSubmit={onAddPost}/>
                    </div>

                    <div className={s.posts}>
                        { postsElements }
                    </div>
            </div>
        );
};

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                  <Field component={Textarea}
                         placeholder="Что у вас нового?"
                         name={'newPostBody'}
                         validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const NewPostReduxForm = reduxForm({
    form: 'profileAddPostForm'
})(NewPostForm)

export default MyPosts;

