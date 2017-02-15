import React, { Component } from 'react';

// let note = {
//   details: [
//     {
//       id: 0,
//       text: '第一条数据'
//     },
//     {
//       id: 1,
//       text: '第二条数据'
//     }
//   ]
// }
// localStorage.setItem('note', JSON.stringify(note));//保存
// console.log(localStorage.getItem('note'));//读取
// console.log(JSON.parse(localStorage.getItem('note')));//读取

class InpuText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      // noteData: note.details
      // noteData: JSON.parse(localStorage.getItem('note'))
    }
  }
  componentDidMount() {
    console.log('已加载组件，读取数据');
    // if(localStorage.getItem('note')) {
    //   console.log('存在localStorage');
    //   console.log(localStorage.getItem('note'));
    // }else {
    //   console.log('没有localStorage数据');
    // }
  }
  componentWillMount() {
    console.log('未加载组件');
  }
  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  sendInputValue(e) {
    if(e.key && e.key === 'Enter') {
      this.props.getInputValue(e.target.value);
      console.log(e.target.value);
    }
  }
  sendInputValueTwo(e) {
    this.props.getInputValue(this.refs.inputValue.value);
  }
  render() {
    return (
      <div>
        <input
          placeholder={this.state.inputValue}
          onChange={this.updateInputValue.bind(this)}//更新inputValue
          onKeyPress={this.sendInputValue.bind(this)}//发送inputValue
          value={this.state.inputValue}
          ref='inputValue'
          autoFocus
        />
        <button onClick={this.sendInputValueTwo.bind(this)}//发送inputValue
        >send</button>
        <p>{this.state.inputValue}</p>
      </div>
    )
  }
}

export default InpuText;
