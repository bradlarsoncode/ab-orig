import React from 'react';
import Cal from './components/Cal'
import './components/stylesheet.scss'
import Nav from './components/Nav'
import Splash from './components/Splash'
import Listing from './components/Listing'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav/>
      <div className="App">
        <Switch>
          <Route exact path="/stay" component={Cal} />
          <Route exact path="/" component={Splash}/>
          <Route exact path="/listing" component={Listing}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
