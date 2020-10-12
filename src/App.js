import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Navigation from './components/Navigation';
import Feedback from './components/Feedback';

import Header from './components/Header';
 
class App extends Component {
  render() {
    return (      
      <BrowserRouter>
       <Header />
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
            <Route component={Error}/>
           </Switch>
        </div> 
        <Feedback />
      </BrowserRouter>
    );
  }
}
 
export default App;