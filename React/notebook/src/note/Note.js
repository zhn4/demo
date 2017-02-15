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

let note = JSON.parse(localStorage.getItem('note'))

// localStorage.setItem('note', JSON.stringify(note));

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputdata: '还没输入',
      noteData: note.details
      // noteData: JSON.parse(localStorage.getItem('note')).details
    }
  }
  componentDidMount() {
    console.log('已加载组件');
  }
  componentWillMount() {
    console.log('未加载组件');
    console.log(JSON.parse(localStorage.getItem('note')));
    // let gg = JSON.parse(localStorage.getItem('note'))
    // console.log(gg)
    // console.log(gg.details)
  }
  getInputValue(getValue) {
    this.setState({
      inputdata: getValue
    })
    note.details.push({
      text: getValue
    })
    localStorage.setItem('note', JSON.stringify(note));
  }
  render() {
    return (
      <div>
        notepad
        <InpuText getInputValue={this.getInputValue.bind(this)}/>
        <p>input data:{this.state.inputdata}</p>
        <div>todo</div>
        <ul>
          {this.state.noteData.map((notes, i)=>(
            <li key={i}>
              {i}:{notes.text}
            </li>
          ))}
        </ul>
        <div>done</div>
        <ul>
          <li>123</li>
        </ul>
      </div>
    );
  }
}

export default Note;
