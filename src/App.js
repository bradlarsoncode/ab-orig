import React from 'react';
// import './App.css';
import ContactUs from './components/contactForm';
import Cal from './components/Cal'
import Success from './components/Success'
import './components/stylesheet.scss'
import Pics from "./components/Pics"
import Nav from './components/Nav'
import Splash from './components/Splash'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    {/* <Nav/> */}
      <div className="App">
        <Switch>
          <Route exact path="/stay" component={Cal} />
          <Route exact path="/" component={Splash}/>
          {/* <Route exact path="/place" component={Place} />
          <Route exact path="/pieces" component={Pieces} />
          <Route exact path="/home" component={Home} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
