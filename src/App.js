import React from 'react';
import Home from './Home';
import LsfbChallenge from './LSFBChallenge'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(props) {
  return (
    <Router basename="/jfink">
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/LSFB" exact component={LsfbChallenge} />
        </Switch>
      </div>
    </Router>
  );
}



export default App;
