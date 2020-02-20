import React, { Component } from 'react';

class MyDecks extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className = "alert alert-warning" role="alert">
                    You are currently not logged in. Login to manage your inventory!
                </div>

            </div>
        );
    }
}
 
export default MyDecks;
