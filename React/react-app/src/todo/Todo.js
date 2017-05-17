import React, { Component } from 'react';

import './todo.css'

let list = []

// 输入框监听回车键添加事件
// text: 事件描述
// do: true 事件正在做
// do: false 事件已完成
// 每次处理事件check把索引值i传给父组件，父组件的函数在数组中找出对应的对象修改do的值

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: list
    }
  }
  handleEnter(e) {
    if(e.key === 'Enter' && e.target.value !== '') {
      list.push({
        text: e.target.value,
        do: true
      })
      this.setState({
        list: list
      })
      e.target.value = null
    }
  }
  handleChecked(i) {
    list[i].do = false// 获取索引值，修改事件状态
    this.setState({
      list: list
    })
  }
  haneldNotChecked(i) {
    list[i].do = true// 获取索引值，修改事件状态
    this.setState({
      list: list
    })
  }
  render() {
    return (
      <div className="todo">
        <input type="text"
          placeholder="todo"
          onKeyPress={this.handleEnter.bind(this)}/>
        <Doing list={this.state.list} handleChecked={this.handleChecked.bind(this)}/>
        <Done list={this.state.list} haneldNotChecked={this.haneldNotChecked.bind(this)}/>
      </div>
    )
  }
}

class Doing extends Component {
  handleChecked(i) {
    this.props.handleChecked(i)// 发送索引值
  }
  render() {
    return (
      <div>
        <h3>Doing</h3>
        <ul>
          {this.props.list.map((data, i) => (
            data.do
            ?
              <li key={i}>
                {data.text}
                <input type="checkbox"
                  onClick={this.handleChecked.bind(this, i)}/>
              </li>
            :
              ''
          ))}
        </ul>
      </div>
    )
  }
}

class Done extends Component {
  haneldNotChecked(i) {
    this.props.haneldNotChecked(i)// 发送索引值
  }
  render() {
    return (
      <div className="done">
        <h3>Done</h3>
        <ul>
          {this.props.list.map((data, i) => (
            data.do
            ?
              ''
            :
              <li key={i}>
                {data.text}
                <input type="checkbox"
                  checked
                  onClick={this.haneldNotChecked.bind(this, i)}/>
              </li>
          ))}
        </ul>
      </div>
    )
  }
}
