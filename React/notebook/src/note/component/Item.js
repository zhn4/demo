import React, { Component } from 'react';

class Item extends Component {
  // constructor(props) {
  //   super(props)
  // }
  handle() {
    this.props.handleChecked(this.props.index)
  }
  render() {
    let judge = this.props.done ? '完成' : '未完成'
    return (
      <div>{this.props.text}:{this.props.id}:{judge}:
        <input type="checkbox" onClick={this.handle.bind(this)} />
      </div>
    )
  }
}

export default Item;
