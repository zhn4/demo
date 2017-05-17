import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import App from './App';
import Todo from './todo/Todo';

import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App}/>
      <Route exact path='/todo' component={Todo}/>
    </div>
  </Router>,
  document.getElementById('root')
);
