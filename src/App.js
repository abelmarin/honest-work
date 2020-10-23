import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Project from './components/Project';
import Feedback from './components/Feedback';
import Settings from './components/Settings';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/project" component={Project} exact />
            <Route path="/settings" component={Settings} exact />
            <Route path="/feedback" component={Feedback} exact />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;