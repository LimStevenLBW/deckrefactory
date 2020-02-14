import { Component } from 'react';
import auth from '../services/auth';

class Logout extends Component {
    
    componentDidMount(){
        auth.removeTok();
        this.props.resetAuth();
        this.props.history.push("/"); //Redirect
    }

    render(){
        return null;
    }
}
 
export default Logout;