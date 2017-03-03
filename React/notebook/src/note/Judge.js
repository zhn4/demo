import React, { Component } from 'react';

import Item from './component/Item';
import InpuText from './component/InpuText';

import './style/Note.css';

// let list = [
//   {
//     text: 'one thing',
//     done: false
//   },
//   {
//     text: 'two thins',
//     done: true
//   },
//   {
//     text: 'three thing',
//     done: false
//   },
//   {
//     text: 'four thing',
//     done: false
//   }
// ]
// localStorage.setItem('list', JSON.stringify(list));

let list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];// localStorage数据

class Judge extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: '',
      text: '还没数据'
    }
  }
  componentWillMount() {
    // console.log(this.state.list);
    // this.state.list.map((details, i)=> (
    //   console.log(details)
    // ));
    this.setState({// 载入localStorage数据，修改state
      list: list
    })
  }
  getInputValue(getValue) {
    console.log(getValue)
    this.setState({
      text: getValue
    })
    list.push({// 新增加的数据加入到list数组
      text: getValue,
      done: false
    });
    localStorage.setItem('list', JSON.stringify(list));
    // console.log(list)
  }
  handleChecked(sendData) {
    setTimeout(()=> {
      list[sendData].done = !list[sendData].done;// 根据组件传过来的索引值，修改对应数据的done值
      localStorage.setItem('list', JSON.stringify(list));// 数据保存到localStorage
      this.setState({
        list: list
      });
    }, 200);
  }
  render() {
    return (
      <div>
        <p className="title">Todo列表</p>
        <hr/>
        <InpuText getInputValue={this.getInputValue.bind(this)} />
        <p>组件获取到的数据：{this.state.text}</p>
        <p>未完成</p>
        {this.state.list.map((data, i) => (
          data.done
          ?
            ''
          :
            <Item key={i}
              index={i}
              text={data.text}
              id={data.id}
              done={data.done}
              handleChecked={this.handleChecked.bind(this)}
            />
        ))}
        <p>完成</p>
        {this.state.list.map((data, i) => (
          data.done
          ?
            <Item key={i}
              index={i}
              text={data.text}
              id={data.id}
              done={data.done}
              handleChecked={this.handleChecked.bind(this)}
            />
          :
          ''
        ))}
      </div>
    )
  }
}

export default Judge;
