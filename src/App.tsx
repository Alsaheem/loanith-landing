import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home/Home';
import WhyLoanith from './pages/WhyRosabon/WhyLoanith';

function App() {
  return (
    <Router>

        <Switch>
          <Route path="/" children={<Home />} />
          <Route path="/why-loanith" children={<WhyLoanith />} />
        </Switch>
    </Router>
  );
}

export default App;
