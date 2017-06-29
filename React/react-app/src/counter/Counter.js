import React, { Component } from 'react';

import './counter.css'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  handleAdd() {
    this.setState({
      count: this.state.count + 1
    })
  }
  handleSub() {
      this.setState({
      count: this.state.count - 1
    })
  }
  render() {
    return (
      <div className="counter">
        <div onClick={this.handleSub.bind(this)}>-</div>
        <div>{this.state.count}</div>
        <div onClick={this.handleAdd.bind(this)}>+</div>
      </div>
    )
  }
}
