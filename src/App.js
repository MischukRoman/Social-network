import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";


const App = (props) => {
        return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>

                        <Route path='/profile/:userId?' render={() =>
                            <ProfileContainer store={props.store}/>}/>

                        <Route path='/dialogs' render={ () =>
                            <Dialogs store={props.store} dialogsPage={props.state.dialogsPage}
                                     dispatch={props.dispatch}/>}/>

                        <Route path='/users' render={ () =>
                            <UsersContainer/>}/>

                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/login' component={Login}/>

                    </div>
                </div>
        );
};

export default App;
