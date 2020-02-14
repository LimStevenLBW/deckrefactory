import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import DeckBuilder from './components/DeckBuilder';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import NotFound from './components/NotFound';
import Logout from './components/Logout';

import auth from './services/auth';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

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

  /**
   * Callback to trigger re-rendering on login request
   */
  updateAuthStatus = () => {
    const user = auth.getCurrentUser();
    if(user) this.setState({ user });
  }

  /**
   * Callback to trigger re-rendering on logout request
   */
  resetAuthStatus = () => {
    this.setState({ user: undefined });
  }
    
  render() {
    return (
      <div className = "app app-background">
        <ToastContainer />
        <Navbar user = { this.state.user }/>

        <Switch>
            <Route path = "/builder" component = {DeckBuilder} />
            <Route 
              path = "/register" 
              render={(props) => <RegisterForm {...props} updateAuth = {this.updateAuthStatus} />}
            />
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
