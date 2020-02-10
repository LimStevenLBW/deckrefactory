import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import DeckBuilder from './components/DeckBuilder';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import NotFound from './components/NotFound';
import './App.scss';

/**
 * Establishes application routes
 * Branching container for components
 */
function App() {
  return (
    <div className = "app app-background">
      <Navbar />

      <Switch>
          <Route path = "/builder" component = {DeckBuilder} />
          <Route path = "/register" component = {RegisterForm} />
          <Route path = "/login" component = {LoginForm} />
          <Route path = "/notfound" component = {NotFound} />
          <Redirect from = "/" exact to = "/builder" />
          <Redirect to = "/notfound" />
        </Switch>
    </div>
  );
}

export default App;
