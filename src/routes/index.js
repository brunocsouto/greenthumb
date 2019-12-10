import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
  
import Home from '../pages/home';
import Quiz from '../pages/quiz';
import Result from '../pages/results';
import Contact from '../pages/contact';


export default function Routes() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/results" component={Result} />
        <Route exact path="/contact/:id" component={Contact} />
      </Switch>
    </Router>
  );
}
