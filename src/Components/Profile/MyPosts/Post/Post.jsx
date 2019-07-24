import React from 'react';
import s from './Post.module.css';

class Post extends React.Component {
    render = () => {
        return (
                    <div className={s.item}>
                        <img src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"/>
                        {this.props.message}
                        <div>
                            <span>Like</span> {this.props.LikesCount}
                        </div>

                    </div>
        );
    }
}

export default Post;