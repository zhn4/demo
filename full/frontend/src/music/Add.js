import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Add extends Component {
  // constructor() {
  //
  // }
  handleSubmit() {
    console.log('submit')
    console.log(this.refs.title.value)
    console.log(this.refs.singer.value)
    if(this.refs.title.value !== '' && this.refs.singer.value !== '') {
      fetch('http://localhost:3000/api/addMusic', {
        method: 'post',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.refs.title.value,
          singer: this.refs.singer.value
        })
      }).then(res => {
        if(res.ok) {
          res.json()
          .then(json => {
            console.log(json)
            alert(json.msg)
            // window.location.reload()
          })
        }
      }).catch(err => {
        console.log(err)
      })
    }else {
      alert('歌曲名/演唱者不能为空')
    }
  }
  handleEnterSubmit(e) {
    if(e.key === 'Enter') {
      this.handleSubmit()
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="歌曲名"
          ref="title"
          onKeyPress={this.handleEnterSubmit.bind(this)} />

        <input
          type="text"
          placeholder="演唱者"
          ref="singer"
          onKeyPress={this.handleEnterSubmit.bind(this)} />

        <input
          type="submit"
          value="提交"
          onClick={this.handleSubmit.bind(this)} />
      </div>
    )
  }
}

export default Add
