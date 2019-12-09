import React from "react";
// import { GlobalStyle } from './utils/styles/global.js';
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Start from './pages/start';
import Quiz from './pages/quiz';
import Result from './pages/results';
import Contact from './pages/contact';



const App = () => {
  return (
    <div className="App">
      {/* <GlobalStyle /> */}
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/results" component={Result} />
          <Route exact path="/contact/:id" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
