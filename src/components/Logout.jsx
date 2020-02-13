import React, { Component } from 'react';

class Logout extends Component {
    componentDidMount(){
        localStorage.removeItem('tok');
        this.props.resetAuth();
        this.props.history.push("/"); //Redirect
    }

    render(){
        return null;
    }
}
 
export default Logout;