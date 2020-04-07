import React, { Component } from 'react';
import temp from '../../images/gudetama.png'
import './Profile.scss';

class Profile extends Component {
    state = {  }
    render() { 
        return (  
            <div className = "profile-container">
                <div className = "profile-pic-container">
                    <img className = "profile-pic" src = {temp}></img>
                </div>
                
                <h1 className = "profile-email">Email</h1>
                <h1 className = "profile-username">username</h1>
                <h2 className = "profile-change">change password</h2>
                <h3 className = "profile-delete">Delete Account</h3>

            </div>
        );
    }
}
 
export default Profile;