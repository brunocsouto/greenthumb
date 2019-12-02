import React from "react";
import { GlobalStyle } from './utils/styles/global.js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Start from './pages/Start';
import plants from './pages/plants';
import Result from './pages/Result';
import Purchase from './pages/Purchase';



const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/plants" component={plants} />
          <Route exact path="/result" component={Result} />
          <Route exact path="/purchase/:id" component={Purchase} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
