import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';

const people = [
  {
    name: 'yao',
    age: 23
  },
  {
    name: 'li',
    age: 23
  }
]

class List extends React.Component {
  render() {
    return (
      <div>
        {this.props.people.map((people, i)=>(
          <p key={i}>{people.name} + {people.age}</p>
        ))}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <List people={people}/>
      </div>
    );
  }
}

export default App;
