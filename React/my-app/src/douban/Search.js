import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'default'//input的value
    }
  }
  handleInput(event) {
    this.setState({//更新input的value
      inputValue: event.target.value
    })
    console.log(event.target.value)
  }
  sendData(sendData) {
    // this.props.movieSearch(sendData.target.value)
    if(sendData.key === 'Enter') {
      this.props.movieSearch(sendData.target.value)
    }
  }
  render() {
    return (
      <div>
        <input
          placeholder={this.state.inputValue}
          // onChange={this.handleInput.bind(this)}//更新input的value的函数
          onKeyUp={this.sendData.bind(this)}
        />
        {/* 输出input的value */}
        {/* <p>{this.state.inputValue}</p> */}
      </div>
    )
  }
}

export default Search;
