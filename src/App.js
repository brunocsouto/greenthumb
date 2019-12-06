import React from "react";
import { GlobalStyle } from './utils/styles/global.js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Start from './pages/Start';
import Quiz from './pages/quiz';
import plants from './pages/plants';
import Result from './pages/results';
import Purchase from './pages/Purchase';



const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/plants" component={plants} />
          <Route exact path="/results" component={Result} />
          <Route exact path="/purchase/:id" component={Purchase} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
