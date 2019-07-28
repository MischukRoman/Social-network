import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileInfo extends React.Component {
    render = () => {
        return (
            <div>
                <div>
                    <img src='https://guruturizma.ru/wp-content/uploads/2016/01/Da-Nang-Beach.jpg'/>
                </div>
                <div className={s.descriptionBlock}>
                    ava + description
                </div>
            </div>
        );
    }
}

export default ProfileInfo;