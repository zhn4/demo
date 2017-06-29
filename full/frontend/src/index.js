import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Music from './music/Music';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App}/>
      <Route path='/music' component={Music}/>
    </div>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
