import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/img/ava_defolt.png";
import {NavLink} from "react-router-dom";

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
                    <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} className={s.userPhoto}/>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        );
    };

export default ProfileInfo;