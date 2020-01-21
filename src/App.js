import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import DeckBuilder from './components/DeckBuilder';
import NotFound from './components/NotFound';

/**
 * Establishes application routes
 * Branching container for components
 */
function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
          <Route path = "/builder" component = {DeckBuilder} />
          <Route path = "/notfound" component = {NotFound} />
          <Redirect from = "/" exact to = "/" />
          <Redirect to = "/notfound" />
        </Switch>
    </div>
  );
}

export default App;
