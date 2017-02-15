import React, { Component } from 'react';

import InpuText from './component/InpuText';

let note = {
  details: [
    {
      text: '第一'
    },
    {
      text: '第二'
    }
  ]
}

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputdata: '还没输入',
      noteData: note.details
    }
  }
  getInputValue(getValue) {
    this.setState({
      inputdata: getValue
    })
  }
  render() {
    return (
      <div>
        notepad
        <InpuText getInputValue={this.getInputValue.bind(this)}/>
        <p>input data:{this.state.inputdata}</p>
        <ul>
          {this.state.noteData.map((notes, i)=>(
            <li key={i}>
              {i}:{notes.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Note;
