import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";


class App extends React.Component {
    render = () => {
        return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Profile/>

            </div>
        );
    }
}

export default App;
