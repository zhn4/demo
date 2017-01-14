import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

import App from './App';
import Douban from './Douban';
import Movie from './douban/Movie'
import Search from './douban/Search'

import './style/index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/douban" component={Douban}/>
    <Route path="/movie" component={Movie}/>
    <Route path="/search" component={Search}/>
  </Router>,
  document.getElementById('root')
);
