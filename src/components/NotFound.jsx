import React from 'react';
import gudetama from '../images/gudetama.png';

const NotFound = () => {
    return (  
        <React.Fragment>
            <div className = "alert alert-warning" role="alert">
                Requested page was not found, maybe it's under construction?
            </div>
            <img className = "w-50" src = {gudetama}></img>
        </React.Fragment>
    );
}
 
export default NotFound
