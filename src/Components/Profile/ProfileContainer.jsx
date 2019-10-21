import React from 'react';
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
         let userId = this.props.match.params.userId;
         profileAPI.getUserProfile(userId)
             .then((response) => {
             this.props.setUserProfile(response.data);
         })
     }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);