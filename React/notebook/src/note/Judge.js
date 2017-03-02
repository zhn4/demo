import React, { Component } from 'react';

import Item from './component/Item';

let list = [
  {
    id: 1,
    text: 'one thing',
    done: false
  },
  {
    id: 2,
    text: 'two thins',
    done: true
  },
  {
    id:3,
    text: 'three thing',
    done: false
  },
  {
    id: 4,
    text: 'four thing',
    done: false
  }
]

class Judge extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: list,
      text: '123'
    }
  }
  componentWillMount() {
    console.log(this.state.list);
    let data = {
      todo: [],
      done: []
    }
    console.log(data)
    this.state.list.map((details, i)=> (
      console.log(details)
    ))
  }
  handleChecked(sendData) {
    list[sendData].done = !list[sendData].done
    this.setState({
      list: list
    })
  }
  render() {
    return (
      <div>
        <p>Todo列表</p>
        <p>完成</p>
        {this.state.list.map((data, i) => (
          data.done
          ?
            <Item key={i} index={i} text={data.text} id={data.id} done={data.done} handleChecked={this.handleChecked.bind(this)}/>
          :
          ''
        ))}
        <p>未完成</p>
        {this.state.list.map((data, i) => (
          data.done
          ?
            ''
          :
            <Item key={i} index={i} text={data.text} id={data.id} done={data.done} handleChecked={this.handleChecked.bind(this)}/>
          
        ))}
      </div>
    )
  }
}

export default Judge;
