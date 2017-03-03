import React, { Component } from 'react';

class Item extends Component {
  handle() {
    this.props.handleChecked(this.props.index)
  }
  render() {
    let judge = this.props.done ? '完成' : '未完成'
    let line = this.props.done ? 'done' : ''
    return (
      <div className={line}>{this.props.text}:{judge}:
        <input type="checkbox" onClick={this.handle.bind(this)} />
      </div>
    )
  }
}

export default Item;
