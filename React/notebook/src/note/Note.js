import React, { Component } from 'react';

import InpuText from './component/InpuText';

// let note = {
//   details: [
//     {
//       text: '第一'
//     },
//     {
//       text: '第二'
//     },
//     {
//       text: '第三'
//     }
//   ]
// }

// let note = JSON.parse(localStorage.getItem('note'))

// localStorage.setItem('note', JSON.stringify(note));

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputdata: '还没输入',
      // noteData: note.details
      noteData: ''
      // noteData: JSON.parse(localStorage.getItem('note')).details
    }
  }
  componentDidMount() {
    console.log('已加载组件');
  }
  componentWillMount() {
    console.log('未加载组件');
    if(localStorage.getItem('note')) {// 判断时会否存在localStorage数据，有就返回给state
      // console.log('有数据')
      // console.log(JSON.parse(localStorage.getItem('note')))
      this.setState({
        noteData: JSON.parse(localStorage.getItem('note')).details
      })
    }else {
      console.log('没有数据')
      // let note = {
      //   details: []
      // }
      // this.setState({
      //   noteData: note.details
      // })
    }
  }
  getInputValue(getValue) {
    this.setState({
      inputdata: getValue
    })
    // console.log(this.state.noteData)
    // 输入的数据加入localStorage数据数组
    // this.state.noteData.push({
    //   text: getValue
    // })
    // let note = {
    //   details: this.state.noteData
    // }
    // // console.log(note)
    // localStorage.setItem('note', JSON.stringify(note));
    if(localStorage.getItem('note')) {
      console.log('已存在数据')
      this.state.noteData.push({
        text: getValue
      })
      let note = {
        details: this.state.noteData
      }
      localStorage.setItem('note', JSON.stringify(note));
    }else {
      console.log('需要增加数据')
      let note = {
        details: []
      }
      note.details.push({
        text: getValue
      })
      this.setState({
        noteData: note.details
      })
      localStorage.setItem('note', JSON.stringify(note));

    }
  }
  render() {
    return (
      <div>
        notepad
        <InpuText getInputValue={this.getInputValue.bind(this)}/>
        <p>input data:{this.state.inputdata}</p>
        <div>todo</div>
        {
          this.state.noteData
          ?
            <ul>
              {this.state.noteData.map((notes, i)=>(
                <li key={i}>
                  {i}:{notes.text}
                </li>
              ))}
            </ul>
          :
          <p>还没添加事件</p>
        }
        <div>done</div>
        <ul>
          <li>123</li>
        </ul>
      </div>
    );
  }
}

export default Note;
