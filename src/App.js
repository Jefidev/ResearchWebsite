import React from 'react';
import Home from './Home';
import BaseSite from './lsfb/BaseSite'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(props) {
  return (
    <Router basename="/jfink">
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/LSFB" component={BaseSite} />
        </Switch>
      </div>
    </Router>
  );
}



export default App;
