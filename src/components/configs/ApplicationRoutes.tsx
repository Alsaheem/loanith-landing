import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from '../pages/Home/Home';
import WhyLoanith from '../pages/WhyLoanith/WhyLoanith';
import Contact from '../pages/contact/Contact';
import Support from '../pages/support/Support';
import Waitlist from '../pages/waitlist/Waitlist';
import LeaderBoard from '../pages/leaderboard/LeaderBoard';
import Layout from '../common/Layout/Layout';
import Privacy from '../pages/privacy/Privacy';
import Terms from '../pages/terms/Terms';
import Blogs from '../pages/blogs/index';

const ApplicationRoutes = () => {
    return(  
    <Router>
      <Layout>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/why-loanith" component={WhyLoanith} />
          <Route path="/contact" component={Contact} />
          <Route path="/support" component={Support} />
          <Route path="/waitlist" component={Waitlist} />
          <Route path="/leaderboard" component={LeaderBoard} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/blog" component={Blogs} />
        </Switch>
      </Layout>

    </Router>)
}


export default ApplicationRoutes;