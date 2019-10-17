import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
        if (!props.profile) {
            return <Preloader/>
        }

        return (
            <div>
                <div>
                    {/*<img src='https://guruturizma.ru/wp-content/uploads/2016/01/Da-Nang-Beach.jpg'/>*/}
                </div>
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large}/>
                    ava + description
                </div>
            </div>
        );
    };

export default ProfileInfo;