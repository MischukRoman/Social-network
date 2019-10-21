import React from 'react';
import {connect} from 'react-redux';
import {
    followSuccess, getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollowSuccess
} from '../../redux/users-reducer';
import Preloader from "../common/Preloader/Preloader";
import Users from './Users';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render(){

        return <>
                { this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    unfollow={this.props.unfollowSuccess}
                    follow={this.props.followSuccess}
                    onPageChanged={this.onPageChanged}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}/>

        </>
    };
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

/*
// Старая версия функции mapDispatchToProps, сейчас все записано болеее сокращенным синтаксисом, а это розширеный

let mapDispatchToProps = (dispatch) => {
    return {

        follow: (userId) => {
            dispatch( followAC(userId) );},
        unfollow:  (userId) => {
            dispatch( unfollowAC(userId) );},
        setUsers:  (users) => {
            dispatch( setUsersAC(users) );},
        setCurrentPage: (pageNumber) => {
            dispatch( setCurrentPageAC(pageNumber) );},
        setTotalUsersCount: (totalCount) => {
            dispatch( setTotalUsersCountAC(totalCount) );},
        toggleIsFetching: (isFetching) => {
            dispatch( toggleIsFetchingAC(isFetching) );},

        }
};
*/



export default connect(mapStateToProps, {
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
})(UsersAPIComponent);