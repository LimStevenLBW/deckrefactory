import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Navbar from './components/Navbar';
import DeckBuilder from './components/DeckBuilder';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import NotFound from './components/NotFound';
import './App.scss';
import Logout from './components/Logout';

/**
 * Establishes application routes
 * Branching container for components
 */
class App extends Component {
  state = { 
    user: undefined
  }
  
  componentDidMount(){
    this.updateAuthStatus();
  }

  updateAuthStatus = () => {
    try{
      const jwt = localStorage.getItem('tok');
      const user = jwtDecode(jwt);
      this.setState({ user });
    }
    catch(ex){}
  }

  resetAuthStatus = () => {
    this.setState({ user: undefined });
  }


    
  render() {
    return (
      <div className = "app app-background">
        <Navbar user = { this.state.user }/>
  
        <Switch>
            <Route path = "/builder" component = {DeckBuilder} />
            <Route path = "/register" component = {RegisterForm} />
            <Route 
              path = "/login" 
              render={(props) => <LoginForm {...props} updateAuth = {this.updateAuthStatus} />}
            />
            <Route 
              path = "/logout" 
              render={(props) => <Logout {...props} resetAuth = {this.resetAuthStatus} />}
            />
            <Route path = "/notfound" component = {NotFound} />
            <Redirect from = "/" exact to = "/builder" />
            <Redirect to = "/notfound" />
          </Switch>
      </div>
    );
  }
}
 
export default App;
