import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeLSFB from './HomeLSFB'
import SignsSample from './SignsSample'
import TestD3 from './TestD3'
import unamur from '../assets/images/LSFB/UNamur.png'
import baillet from '../assets/images/LSFB/baillet.svg'


function BaseSite(props) {
  return (
    <Router basename="/jfink/LSFB">
      <Nav />
      <Switch>
        <Route path="/" exact component={HomeLSFB} />
        <Route path="/sample" exact component={SignsSample} />
        <Route path="/d3" exact component={TestD3} />
      </Switch>
      <Bottom />
    </Router>
  );
}

function Nav() {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-teal-500 p-6">
      <a href="/jfink/lsfb">
        <div className="text-white">
          <h1 className="text-4xl skew-y-12">LSFB</h1>
          <p className="text-2xl">Towards Sign Language Translation</p>
        </div>
      </a>


      <div className="flex items-center flex-shrink-0 text-white">
        <a href="https://www.unamur.be">
          <img src={unamur} className="h-24 pr-5" alt="Logo UNamur" />
        </a>
        <a href="https://fondsbailletlatour.com">
          <img src={baillet} className="h-20 mr-auto ml-auto" alt="Logo Fond Baillet Latour" />
        </a>
      </div>
    </nav >
  )
}


function Bottom() {
  return (
    <div className="text-center text-white w-full pb-10 pt-10 inset-x-0.bottom-0 bg-teal-500">
      <p>Jérôme Fink - 2020</p>
    </div>
  )
}

export default BaseSite;