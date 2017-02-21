import React, { Component } from 'react';

class InpuText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    }
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
      this.setState({
        inputValue: ''
      })
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
