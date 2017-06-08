import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import App from './App';
import Todo from './todo/Todo';
import Counter from './counter/Counter';

import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App}/>
      <Route  path='/todo' component={Todo}/>
      <Route  path='/counter' component={Counter}/>
    </div>
  </Router>,
  document.getElementById('root')
);
