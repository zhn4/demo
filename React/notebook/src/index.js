import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './App';
import Note from './note/Note';
import Judge from './note/Judge';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/note" component={Note}/>
    <Route path="/judge" component={Judge}/>
  </Router>,
  document.getElementById('root')
);
