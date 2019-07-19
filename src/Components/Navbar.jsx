import React from 'react';

class Navbar extends React.Component {
    render = () => {
        return (
            <nav className='nav'>
                <div>
                    <a src="#">Profile</a>
                </div>
                <div>
                    <a src="#">Messages</a>
                </div>
                <div>
                    <a src="#">News</a>
                </div>
                <div>
                    <a src="#">Music</a>
                </div>
                <div>
                    <a src="#">Settings</a>
                </div>
            </nav>
        );
    }
}

export default Navbar;