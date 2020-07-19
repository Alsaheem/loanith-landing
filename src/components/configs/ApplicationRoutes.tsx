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
import NotFound from '../NotFound/NotFound';

const ApplicationRoutes = () => {
    return(  
    <Router>
      <Layout>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/why-loanith" exact component={WhyLoanith} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/support" exact component={Support} />
          <Route path="/waitlist" exact component={Waitlist} />
          <Route path="/leaderboard" exact component={LeaderBoard} />
          <Route path="/privacy" exact component={Privacy} />
          <Route path="/terms" exact component={Terms} />
          <Route path="/blog" exact component={Blogs} />
          <Route component={NotFound} />
        </Switch>
      </Layout>

    </Router>)
}


export default ApplicationRoutes;