import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Register from './components/home/Register';
import Project from './components/project/Project';
import Feedback from './components/feedback/Feedback';
import Settings from './components/Settings';
import Header from './components/Header';
import Leaderboard from './components/feedback/Leaderboard';
import Error from './components/Error';

import { GlobalProvider } from './context/GlobalState';

class App extends Component {
  render() {
    return (
      // Routes the different pages to their paths
      <GlobalProvider>
        <BrowserRouter>
          <Header />
          <div>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/project" component={Project} exact />
              <Route path="/settings" component={Settings} exact />
              <Route path="/feedback" component={Feedback} exact />
              <Route path="/leaderboard" component={Leaderboard} exact />
              <Route path="/register" component={Register} exact />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </GlobalProvider>
    );
  }
}

export default App;