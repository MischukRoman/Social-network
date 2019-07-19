import React from 'react';

class Profile extends React.Component {
    render = () => {
        return (
            <div className='content'>
                <div>
                    <img src='https://guruturizma.ru/wp-content/uploads/2016/01/Da-Nang-Beach.jpg'/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New posts
                    </div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
              </div>
            </div>
        );
    }
}

export default Profile;