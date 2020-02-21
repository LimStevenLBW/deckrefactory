import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import DeckBuilder from './components/builder/DeckBuilder';
import MyDecks from './components/manager/MyDecks';
import RegisterForm from './components/register/RegisterForm';
import LoginForm from './components/login/LoginForm';
import Home from './components/home/Home';
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
            <Route exact path = "/" component = {Home} />
            <Route path = "/builder" component = {DeckBuilder} />
            <Route path = "/decks" component = {MyDecks} />
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
            <Redirect from = "/home" exact to = "/" />
            <Redirect to = "/notfound" />
          </Switch>
      </div>
    );
  }
}
 
export default App;
