import React, { Component } from 'react';

import InpuText from './component/InpuText';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputdata: '还没输入',
      noteData: ''
    }
  }
  componentDidMount() {
    console.log('已加载组件');
  }
  componentWillMount() {
    console.log('未加载组件');
    if(localStorage.getItem('note')) {// 判断时会否存在localStorage数据，有就返回给state
      this.setState({
        noteData: JSON.parse(localStorage.getItem('note')).details
      })
    }
  }
  getInputValue(getValue) {
    this.setState({//输出输入数据，调试用
      inputdata: getValue
    })
    //判断是否存在localStorage数据
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
        {/* <p>input data:{this.state.inputdata}</p> */}
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
