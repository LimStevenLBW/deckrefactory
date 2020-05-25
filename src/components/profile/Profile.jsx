import React, { Component } from 'react';
import temp from '../../images/gudetama.png'
import './Profile.scss';

class Profile extends Component {
    state = {  }

    componentDidMount(){
      
    }

    render() { 
        const user = this.props.user;
        
        if(user) {
            const { email, username } = user;
            return (  
                <div className = "profile-container text-center">
                    <div className = "profile-pic-container">
                        <img className = "profile-pic" src = {temp}></img>
                    </div>
                    
                    <h2 className = "profile-email">{ email }</h2>
                    <h3 className = "profile-username">{ username }</h3>
                   
                    <button 
                        className = "profile-button"
                        onClick = {() => {console.log("called")}}
                    >
                        Change Password
                    </button>

                    <button 
                        className = "profile-button"
                        onClick = {() => {console.log("called")}}
                    >  
                        Delete Account
                    </button>

                </div>
            );
        }

        return <div>Auth token is expired or does not exist, please relog</div>
    }
}
 
export default Profile;